import TileLayer from 'ol/layer/Tile'
import LayerGroup from 'ol/layer/Group'
import OSM from 'ol/source/OSM'
import XYZ from 'ol/source/XYZ'
import WMTS from 'ol/source/WMTS'
import TileImage from 'ol/source/TileImage'
import TileGrid from 'ol/tilegrid/TileGrid'
import WMTSGrid from 'ol/tilegrid/WMTS'

import TileSuperMapRest from '../plugins/TileSuperMapRest'

import {getWidth, getTopLeft} from 'ol/extent'
import {get as getProj} from 'ol/proj'

import {parse, stringify} from '$ui/utils/url'

import baiduLayer from './baiduLayer'

const AMAP_URL = 'http://webrd03.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}&lang=zh_cn'
const BAIDU_URL = 'http://online{n}.map.bdimg.com/tile/?qt=vtile&x={x}&y={y}&z={z}&styles=pl&scaler=1&udt=20190718'
const EZ_URL = 'http://10.8.6.103/PGIS_S_TileMapServer/Maps/BJSL/EzMap?Service=getImage&Type=RGB&ZoomOffset=0'
const SUPER_URL = 'http://53.1.238.17/iserver/services/map-pgisvec/rest/maps/pgisvecv1'
const FC_URL = 'http://68.26.21.71/images/GetImage.do?method=showImageRedisBytable&jinyi_admin:MA_PGISSLDT&version=v1'


function getFcOrigins() {
  const origins = []
  for (let i = 0; i < 20; i++) {
    const item = i < 7 ? [64, 64] : [107.5, 28]
    origins.push(item)
  }
  return origins
}

function getFcResolutions() {
  const result = []
  const first = 2.0000081722216954
  for (let i = 0; i < 20; i++) {
    const item = first / Math.pow(2, i)
    result.push(item)
  }
  return result
}


export function getWMTSGrid(proj = 'EPSG:4326') {
  const tileSizePixels = 256
  const projection = getProj(proj)
  const projectionExtent = projection.getExtent();
  const size = getWidth(projectionExtent) / tileSizePixels
  const matrixIds = [];
  const resolutions = [];
  for (let i = 0; i <= 20; i++) {
    matrixIds[i] = i;
    resolutions[i] = size / Math.pow(2, i);
  }
  return new WMTSGrid({
    origin: getTopLeft(projectionExtent),
    resolutions: resolutions,
    matrixIds: matrixIds
  });
}


/**
 * 天地图
 * @param {string} t
 *
 * vec_w: 矢量底图
 * cva_w: 矢量注记
 * img_w: 卫星影像底图
 * cia_w: 影像注记
 * ter_w: 地形底图
 * cta_w: 地形注记
 * ibo_w: 境界（省级以上）
 */
function createTdtLayer(t = 'vec_c') {
  return new TileLayer({
    source: new XYZ({
      url: 'http://t{0-7}.tianditu.com/DataServer?T=' + t + '&x={x}&y={y}&l={z}&tk=464554f64aa4f4e90e0321c17a57a331'
    })
  })
}

/**
 * 适配天地图图层
 * @param settings
 * @return {LayerGroup}
 */
function createTdtLayerGroup(settings) {
  const layers = settings.layers.map(n => createTdtLayer(n))
  return new LayerGroup({
    layers: layers
  })
}

/**
 * 适配创建方正地图图层
 * @param settings
 * @return {*}
 */
function createFounderLayer(settings) {
  const tileGrid = getWMTSGrid()
  const basePath = settings.url
  return new TileLayer({
    source: new WMTS({
      url: basePath,
      tileGrid: tileGrid
    }),
    wrapX: false
  })
}

/**
 * 山海经纬 PGIS
 * @param settings
 * @return {*}
 */
function createEzMapLayer(settings) {
  // const basePath = 'http://10.8.6.103/PGIS_S_TileMapServer/Maps/BJSL/EzMap?Service=getImage&Type=RGB&ZoomOffset=0'
  const basePath = settings.url
  const tileGrid = getWMTSGrid()

  return new TileLayer({
    source: new WMTS({
      url: '',
      crossOrigin: 'Anonymous',
      tileGrid: tileGrid,
      tileLoadFunction(imageTile, src) {
        const query = parse(src)
        const params = {
          Row: query.TileRow,
          Col: query.TileCol,
          Zoom: query.TileMatrix,
          V: '1.0.0'
        }
        imageTile.getImage().src = `${basePath}&${stringify(params)}`;
      }
    }),
    wrapX: false
  })
}

/**
 * 创建 WMTS 资源瓦片图层
 * @param settings
 * @returns {*|TileLayer}
 */
export function createWMTSLayer(settings) {
  if (typeof settings.url === 'function') {
    const urlFunction = settings.url
    const tileGrid = getWMTSGrid()
    return new TileLayer({
      source: new WMTS({
        url: '',
        crossOrigin: 'Anonymous',
        tileGrid: tileGrid,
        tileLoadFunction(imageTile, src) {
          const query = parse(src)
          imageTile.getImage().src = urlFunction(query)
        }
      }),
      wrapX: false
    })
  } else {
    return createEzMapLayer(settings)
  }
}

/**
 * 适配超图PGIS图层
 * @param settings
 * @return {*}
 */
function createSuperLayer(settings) {
  return new TileLayer({
    source: new TileSuperMapRest({
      url: settings.url
    }),
    projection: settings.projection || 'EPSG:4326'
  })
}

/**
 * 航天长峰、航天精一 PGIS
 * @param settings
 * @return {*}
 */
function createFcMapLayer(settings) {
  // http://68.26.21.71/images/GetImage.do?method=showImageRedisBytable&jinyi_admin:MA_PGISSLDT&version=v1
  const basePath = settings.url
  return new TileLayer({
    projection: settings.projection || 'EPSG:4326',
    url: `${basePath}&l={z}&x={y}&y={x}`,
    tileGrid: new TileGrid({
      origin: settings.origins || getFcOrigins(),
      resolutions: settings.resolutions || getFcResolutions()
    })
  })
}


/**
 * 适配图层加载
 * @param {string|object|function} adapter 适配器 object: {id, type, url, layers}
 * @param {object} opts
 * @return {LayerGroup|TileLayer|*}
 */
export function createLayer(adapter, opts = {}) {
  if (typeof adapter === 'function') {
    return adapter({
      TileLayer,
      LayerGroup,
      OSM,
      XYZ,
      WMTS,
      TileImage,
      TileGrid,
      WMTSGrid,
      getWidth,
      getTopLeft,
      getProj
    })
  }
  // 字符串类型转换成对象描述
  const settings = typeof adapter === 'object' ? {...adapter} : {type: adapter}
  const type = settings.type
  delete settings.type
  switch (type) {
    case 'OSM':
      return new TileLayer({
        ...opts,
        source: new OSM(settings)
      })
    case 'XYZ':
      return new TileLayer({
        ...opts,
        source: new XYZ(settings)
      })
    case 'Amap':
      return new TileLayer({
        ...opts,
        source: new XYZ({
          url: AMAP_URL,
          ...settings
        })
      })
    case 'Baidu':
      return baiduLayer({
        url: BAIDU_URL,
        ...settings
      })
    // 天地图
    case 'TDT':
      return createTdtLayerGroup({
        layers: ['vec_c', 'vec_w', 'cva_w', 'ibo_w'],
        ...settings
      })
    // 方正
    case 'Founder':
      return createFounderLayer({
        url: 'http://127.0.0.1:3000/proxy',
        ...settings
      })
    // 山海经纬
    case 'Ez':
      return createEzMapLayer({
        url: EZ_URL,
        ...settings
      })
    // 超图
    case 'Super':
      return createSuperLayer({
        url: SUPER_URL,
        ...settings
      })
    // 航天长峰、航天精一
    case 'Fc':
      return createFcMapLayer({
        url: FC_URL,
        ...settings
      })
    case 'WMTS':
      return createWMTSLayer(settings)
  }

}
