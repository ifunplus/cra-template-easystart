/**
 * The purpose of the file is to normalize api response data
 */
import { omit } from 'lodash';
import { normalize, schema } from 'normalizr';
import config from '../config';
import formatTimestamp from './dateUtils';
import intl from 'react-intl-universal';
import { dbToArray } from './imageLevelResultUtils';

export default function rawToImageData(raw) {
  const { baseUrl } = config;
  const imageUrl = baseUrl + '/api/image';
  const images = raw.map((image) => {
    return {
      // detectedNucleiNumber: image.nuclei_number,
      // key: image.id,
      // id: image.id,
      // filename: image.filename,
      // tag: `${imageUrl}/associated/${image.id}?type=macro-label`,
      // thumbnail: `${imageUrl}/associated/${image.id}?type=thumbnail`,
      // uploadDate: formatTimestamp(image.upload_date, 'YYYY-MM-DD HH:mm:ss'),
      // uploader: image.uploader,
      // tagId: image.patient_tag_id,
      // slide_id: image.slide_id,
      // imageLevelResult: dbToArray(image.image_level_result_AI).join(','),
      // prob: image.prob,
      // groundTruthResult: dbToArray(image.ground_truth_result).join(','),
      // clazz: image.clazz,
      // status: image.status,
      // report: {},
      // collectors: image.collectors,
      id: image.id,
      label_id: image.label_id,
      qc_status: image.qc_status,
      data_from: image.data_from,
      filename: image.filename,
      data_type: image.data_type,
      slide_method: image.slide_method,
      upload_date: image.upload_date,
      uploader_account: image.upload_user && image.upload_user.account,
      uploader_id: image.upload_user && image.upload_user.id,
      patient_name: image.patient_name,
      patient_age: image.patient_age,
      patient_case: image.patient_case,
      patient_menses_date: image.patient_menses_date,
      patient_menopause: image.patient_menopause,
      collect_date: image.collect_date,
      ai_result: image.ai_result,
      human_result: image.human_result,
      pathology_report: image.pathology_report,
      label_tag: image.label_tag,
      remarks: image.remarks,
      state: image.state,
      thumb_file: image.thumb_file
    };
  });

  return images;
}

export function rawAnnotationToAnnotationObj(raw) {
  const annotations = { ALL: [] };
  if (raw !== null || raw !== undefined) {
    raw.slice(1).map((anno, index) => {
      if (annotations[anno.class] === undefined) {
        annotations[anno.class] = [];
      }
      const a = {
        isKoilocyte: anno.is_koilocyte,
        ncRatio: anno.nc_ratio,
        nucleiSize: anno.nc_size,
        prob: anno.prob,
        left: anno.px,
        top: anno.py,
        size: anno.size,
        class: anno.class,
        isChecked: anno.isChecked,
        toReport: anno.toReport,
        index: index,
        id: anno.id
      };
      annotations[anno.class].push(a);
      annotations.ALL.push(a);
      return anno;
    });
  }
  return annotations;
}

export function imageIsPending(image) {
  return image.status < 20 && image.status >= 10;
}

const FILTERS = ['qc_status', 'data_type', 'slide_method'];
export function filterTaskQueryFields(fields) {
  let processed = {};
  Object.keys(fields).forEach((key) => {
    if (FILTERS.includes(key)) {
      processed[key] = fields[key];
    }
  });
  return processed;
}

export function transTaskQueryFields(total, queryFields) {
  const filters = ['qc_status', 'data_type', 'slide_method'];
  let textArr = [];
  config.queryFields.forEach((item) => {
    if (filters.includes(item.key)) {
      switch (item.type) {
        case 'select_simple': {
          let selected = item.selects.find(
            (select) => select.value && select.value === queryFields[item.key]
          );
          if (selected && selected.translate) textArr.push(intl.get(selected.translate));
          break;
        }
        case 'search_input': {
          if (queryFields[item.key]) textArr.push(queryFields);
          break;
        }
        case 'range_picker':
          break;
        case 'range_number':
          break;
        default:
          break;
      }
    }
  });
  let str = textArr.join('+');
  if (str) {
    str += '+' + total + intl.get('IMAGE_ZHANG');
  } else {
    str = total + intl.get('IMAGE_ZHANG');
  }
  return str;
}

export function rawToTags(raw) {
  let originData = [];
  let notOriginData = [];
  raw.forEach((item) => {
    if (item.origin) {
      originData.push(item);
    } else {
      notOriginData.push(item);
    }
  });
  return originData.concat(notOriginData);
}

export function rawToTag(raw) {
  if (raw.tags && raw.tags.children) {
    let topics = []
    let tag = []
    //remove duplicate topic
    raw.tags.children.forEach(child => {
      topics.push(child.topic)
      if (topics.includes(child.topic)) {
        tag.push({
          topic: child.topic,
          id: child.id
        })
      }
    })
    return tag;
  }
  return []
}