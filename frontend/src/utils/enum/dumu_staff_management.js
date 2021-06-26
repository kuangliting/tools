export const StreamSelection = {
  STREAM_TYPE_VIDEO_NONE: 0,
  STREAM_TYPE_VIDEO_FIRST: 1,
  STREAM_TYPE_VIDEO_SECOND: 2

};
export const StreamSelectionMap = {
  [StreamSelection.STREAM_TYPE_VIDEO_NONE]: 'PLACEHOLDER',
  [StreamSelection.STREAM_TYPE_VIDEO_FIRST]: 'Stream for video only',
  [StreamSelection.STREAM_TYPE_VIDEO_SECOND]: 'Stream for video and audio'
};
export const StreamSelectionList = [{
  label: 'PLACEHOLDER',
  value: StreamSelection.STREAM_TYPE_VIDEO_NONE
}, {
  label: 'Stream for video only',
  value: StreamSelection.STREAM_TYPE_VIDEO_FIRST
}, {
  label: 'Stream for video and audio',
  value: StreamSelection.STREAM_TYPE_VIDEO_SECOND
}];
export const StreamType = {
  STREAM_TYPE_NONE: 0,
  STREAM_TYPE_VIDEO_ONLY: 1,
  STREAM_TYPE_VIDEO_AND_AUDIO: 2

};
export const StreamTypeMap = {
  [StreamType.STREAM_TYPE_NONE]: 'PLACEHOLDER',
  [StreamType.STREAM_TYPE_VIDEO_ONLY]: 'Stream for video only',
  [StreamType.STREAM_TYPE_VIDEO_AND_AUDIO]: 'Stream for video and audio'
};
export const StreamTypeList = [{
  label: 'PLACEHOLDER',
  value: StreamType.STREAM_TYPE_NONE
}, {
  label: 'Stream for video only',
  value: StreamType.STREAM_TYPE_VIDEO_ONLY
}, {
  label: 'Stream for video and audio',
  value: StreamType.STREAM_TYPE_VIDEO_AND_AUDIO
}];
export const VideoResolution = {
  VIDEO_RES_NONE: 0,
  VIDEO_RES_2560_1440: 1,
  VIDEO_RES_1920_1080: 2,
  VIDEO_RES_1280_720: 3

};
export const VideoResolutionMap = {
  [VideoResolution.VIDEO_RES_NONE]: 'PLACEHOLDER',
  [VideoResolution.VIDEO_RES_2560_1440]: '2560*1440',
  [VideoResolution.VIDEO_RES_1920_1080]: '1920*1080',
  [VideoResolution.VIDEO_RES_1280_720]: '1280*720'
};
export const VideoResolutionList = [{
  label: 'PLACEHOLDER',
  value: VideoResolution.VIDEO_RES_NONE
}, {
  label: '2560*1440',
  value: VideoResolution.VIDEO_RES_2560_1440
}, {
  label: '1920*1080',
  value: VideoResolution.VIDEO_RES_1920_1080
}, {
  label: '1280*720',
  value: VideoResolution.VIDEO_RES_1280_720
}];
export const VideoStreamBitRateType = {
  VIDEO_STREAM_BITRATE_NONE: 0,
  VIDEO_STREAM_BITRATE_CBR: 1,
  VIDEO_STREAM_BITRATE_VBR: 2

};
export const VideoStreamBitRateTypeMap = {
  [VideoStreamBitRateType.VIDEO_STREAM_BITRATE_NONE]: 'PLACEHOLDER',
  [VideoStreamBitRateType.VIDEO_STREAM_BITRATE_CBR]: 'CBR: constant bitrate',
  [VideoStreamBitRateType.VIDEO_STREAM_BITRATE_VBR]: 'VBR: variable bitrate'
};
export const VideoStreamBitRateTypeList = [{
  label: 'PLACEHOLDER',
  value: VideoStreamBitRateType.VIDEO_STREAM_BITRATE_NONE
}, {
  label: 'CBR: constant bitrate',
  value: VideoStreamBitRateType.VIDEO_STREAM_BITRATE_CBR
}, {
  label: 'VBR: variable bitrate',
  value: VideoStreamBitRateType.VIDEO_STREAM_BITRATE_VBR
}];
export const EncodeType = {
  ENCODE_TYPE_NONE: 0,
  ENCODE_TYPE_H264: 1,
  ENCODE_TYPE_H265: 2,
  ENCODE_TYPE_MJPG: 3

};
export const EncodeTypeMap = {
  [EncodeType.ENCODE_TYPE_NONE]: 'PLACEHOLDER',
  [EncodeType.ENCODE_TYPE_H264]: 'H.264压缩编码视频数据',
  [EncodeType.ENCODE_TYPE_H265]: 'H.265压缩编码视频数据',
  [EncodeType.ENCODE_TYPE_MJPG]: 'MJPG压缩编码视频数据'
};
export const EncodeTypeList = [{
  label: 'PLACEHOLDER',
  value: EncodeType.ENCODE_TYPE_NONE
}, {
  label: 'H.264压缩编码视频数据',
  value: EncodeType.ENCODE_TYPE_H264
}, {
  label: 'H.265压缩编码视频数据',
  value: EncodeType.ENCODE_TYPE_H265
}, {
  label: 'MJPG压缩编码视频数据',
  value: EncodeType.ENCODE_TYPE_MJPG
}];
export const ConstantBitRateLevel = {
  CBR_NONE: 0,
  CBR_256KBPS: 1,
  CBR_512KBPS: 2,
  CBR_1024KBPS: 3,
  CBR_2048KBPS: 4,
  CBR_3072KBPS: 5,
  CBR_4096KBPS: 6,
  CBR_6144KBPS: 7,
  CBR_8192KBPS: 8,
  CBR_12288KBPS: 9,
  CBR_16384KBPS: 10

};
export const ConstantBitRateLevelMap = {
  [ConstantBitRateLevel.CBR_NONE]: 'PLACEHOLDER',
  [ConstantBitRateLevel.CBR_256KBPS]: '256Kbps',
  [ConstantBitRateLevel.CBR_512KBPS]: '512Kbps',
  [ConstantBitRateLevel.CBR_1024KBPS]: '1024Kbps',
  [ConstantBitRateLevel.CBR_2048KBPS]: '2048Kbps',
  [ConstantBitRateLevel.CBR_3072KBPS]: '3072Kbps',
  [ConstantBitRateLevel.CBR_4096KBPS]: '4096Kbps',
  [ConstantBitRateLevel.CBR_6144KBPS]: '6144Kbps',
  [ConstantBitRateLevel.CBR_8192KBPS]: '8192Kbps',
  [ConstantBitRateLevel.CBR_12288KBPS]: '12288Kbps',
  [ConstantBitRateLevel.CBR_16384KBPS]: '16384Kbps'
};
export const ConstantBitRateLevelList = [{
  label: 'PLACEHOLDER',
  value: ConstantBitRateLevel.CBR_NONE
}, {
  label: '256Kbps',
  value: ConstantBitRateLevel.CBR_256KBPS
}, {
  label: '512Kbps',
  value: ConstantBitRateLevel.CBR_512KBPS
}, {
  label: '1024Kbps',
  value: ConstantBitRateLevel.CBR_1024KBPS
}, {
  label: '2048Kbps',
  value: ConstantBitRateLevel.CBR_2048KBPS
}, {
  label: '3072Kbps',
  value: ConstantBitRateLevel.CBR_3072KBPS
}, {
  label: '4096Kbps',
  value: ConstantBitRateLevel.CBR_4096KBPS
}, {
  label: '6144Kbps',
  value: ConstantBitRateLevel.CBR_6144KBPS
}, {
  label: '8192Kbps',
  value: ConstantBitRateLevel.CBR_8192KBPS
}, {
  label: '12288Kbps',
  value: ConstantBitRateLevel.CBR_12288KBPS
}, {
  label: '16384Kbps',
  value: ConstantBitRateLevel.CBR_16384KBPS
}];
export const AudioType = {
  AUDIO_TYPE_NONE: 0,
  AUDIO_TYPE_AAC: 1,
  AUDIO_TYPE_G711A: 2,
  AUDIO_TYPE_G711U: 3

};
export const AudioTypeMap = {
  [AudioType.AUDIO_TYPE_NONE]: 'PLACEHOLDER',
  [AudioType.AUDIO_TYPE_AAC]: 'AAC音频'
};
export const AudioTypeList = [{
  label: 'PLACEHOLDER',
  value: AudioType.AUDIO_TYPE_NONE
}, {
  label: 'AAC音频',
  value: AudioType.AUDIO_TYPE_AAC
}];
export const AudioSampleRate = {
  AUDIO_SAMPLE_RATE_NONE: 0,
  AUDIO_SAMPLE_RATE_32KBPS: 1,
  AUDIO_SAMPLE_RATE_40KBPS: 2,
  AUDIO_SAMPLE_RATE_48KBPS: 3,
  AUDIO_SAMPLE_RATE_56KBPS: 4,
  AUDIO_SAMPLE_RATE_64KBPS: 5,
  AUDIO_SAMPLE_RATE_80KBPS: 6,
  AUDIO_SAMPLE_RATE_96KBPS: 7,
  AUDIO_SAMPLE_RATE_112KBPS: 8,
  AUDIO_SAMPLE_RATE_128KBPS: 9,
  AUDIO_SAMPLE_RATE_144KBPS: 10,
  AUDIO_SAMPLE_RATE_160KBPS: 11

};
export const AudioSampleRateMap = {
  [AudioSampleRate.AUDIO_SAMPLE_RATE_NONE]: 'PLACEHOLDER',
  [AudioSampleRate.AUDIO_SAMPLE_RATE_32KBPS]: '32Kbps',
  [AudioSampleRate.AUDIO_SAMPLE_RATE_40KBPS]: '40Kbps',
  [AudioSampleRate.AUDIO_SAMPLE_RATE_48KBPS]: '48Kbps',
  [AudioSampleRate.AUDIO_SAMPLE_RATE_56KBPS]: '56Kbps',
  [AudioSampleRate.AUDIO_SAMPLE_RATE_64KBPS]: '64Kbps',
  [AudioSampleRate.AUDIO_SAMPLE_RATE_80KBPS]: '80Kbps',
  [AudioSampleRate.AUDIO_SAMPLE_RATE_96KBPS]: '96Kbps',
  [AudioSampleRate.AUDIO_SAMPLE_RATE_112KBPS]: '112Kbps',
  [AudioSampleRate.AUDIO_SAMPLE_RATE_128KBPS]: '128Kbps',
  [AudioSampleRate.AUDIO_SAMPLE_RATE_144KBPS]: '144Kbps',
  [AudioSampleRate.AUDIO_SAMPLE_RATE_160KBPS]: '160Kbps'
};
export const AudioSampleRateList = [{
  label: 'PLACEHOLDER',
  value: AudioSampleRate.AUDIO_SAMPLE_RATE_NONE
}, {
  label: '32Kbps',
  value: AudioSampleRate.AUDIO_SAMPLE_RATE_32KBPS
}, {
  label: '40Kbps',
  value: AudioSampleRate.AUDIO_SAMPLE_RATE_40KBPS
}, {
  label: '48Kbps',
  value: AudioSampleRate.AUDIO_SAMPLE_RATE_48KBPS
}, {
  label: '56Kbps',
  value: AudioSampleRate.AUDIO_SAMPLE_RATE_56KBPS
}, {
  label: '64Kbps',
  value: AudioSampleRate.AUDIO_SAMPLE_RATE_64KBPS
}, {
  label: '80Kbps',
  value: AudioSampleRate.AUDIO_SAMPLE_RATE_80KBPS
}, {
  label: '96Kbps',
  value: AudioSampleRate.AUDIO_SAMPLE_RATE_96KBPS
}, {
  label: '112Kbps',
  value: AudioSampleRate.AUDIO_SAMPLE_RATE_112KBPS
}, {
  label: '128Kbps',
  value: AudioSampleRate.AUDIO_SAMPLE_RATE_128KBPS
}, {
  label: '144Kbps',
  value: AudioSampleRate.AUDIO_SAMPLE_RATE_144KBPS
}, {
  label: '160Kbps',
  value: AudioSampleRate.AUDIO_SAMPLE_RATE_160KBPS
}];