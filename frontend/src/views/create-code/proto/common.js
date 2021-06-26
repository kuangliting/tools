export default {
  "Version": {
    "__parentType": [],
    "major16_minor16": {
      "type": "uint32",
      "desc": "版本管理,高16位为主版本号，低16位为次版本号"
    }
  },
  "AIFaceModeOnboot": {
    "__parentType": [],
    "mode": {
      "type": "FaceMode",
      "desc": "人脸识别模式"
    }
  },
  "Point": {
    "__parentType": [],
    "x": {
      "type": "int32",
      "desc": "x坐标"
    },
    "y": {
      "type": "int32",
      "desc": "y坐标"
    }
  },
  "Rect": {
    "__parentType": [],
    "x": {
      "type": "int32",
      "desc": "x坐标"
    },
    "y": {
      "type": "int32",
      "desc": "y坐标"
    },
    "width": {
      "type": "int32",
      "desc": "矩形框宽度"
    },
    "height": {
      "type": "int32",
      "desc": "矩形框高度"
    }
  },
  "Rectf": {
    "__parentType": ["BoundingBox"],
    "x": {
      "type": "float",
      "desc": "x坐标"
    },
    "y": {
      "type": "float",
      "desc": "y坐标"
    },
    "width": {
      "type": "float",
      "desc": "矩形框宽度"
    },
    "height": {
      "type": "float",
      "desc": "矩形框高度"
    }
  },
  "SSID": {
    "__parentType": [],
    "ssid": {
      "type": "string",
      "desc": "wifi ssid名称"
    },
    "passwd": {
      "type": "string",
      "desc": "wifi 密码"
    }
  },
  "IPConfig": {
    "__parentType": [],
    "ip": {
      "type": "string",
      "desc": "当前网络ip：静态设置或者dhcp多态分配"
    },
    "gateway": {
      "type": "string",
      "desc": "当前网络网关：静态设置或者dhcp多态分配"
    },
    "mask": {
      "type": "string",
      "desc": "当前网络子网掩码：静态设置或者dhcp多态分配"
    },
    "dns": {
      "type": "string",
      "desc": "当前网络dns服务，可选"
    },
    "dns_backup": {
      "type": "string",
      "desc": "当前网络备用dns服务，可选"
    },
    "dhcp_on": {
      "type": "SwitchMode",
      "desc": "当前网络是否已开启dhcp"
    },
    "mac": {
      "type": "string",
      "desc": "当前网络的mac地址，只读"
    }
  },
  "Base64Image": {
    "__parentType": ["Image"],
    "base64": {
      "type": "string",
      "desc": "图片base64数据"
    },
    "type": {
      "type": "ImageType",
      "desc": "如果是默认值（NOTIMAGE），表示从base64里获取文件格式，i.e. data:image/jpeg"
    },
    "file_name": {
      "type": "string",
      "desc": "对应的图片文件路径，可为空"
    }
  },
  "BinaryImage": {
    "__parentType": ["Image"],
    "image_data": {
      "type": "bytes",
      "desc": "图片二进制数据"
    },
    "type": {
      "type": "ImageType",
      "desc": "图片类型"
    },
    "file_name": {
      "type": "string",
      "desc": "对应的图片文件路径，可为空"
    }
  },
  "Image": {
    "__parentType": [],
    "image": {
      "type": "oneof",
      "desc": ""
    },
    "base64_image": {
      "type": "Base64Image",
      "desc": "base64编码后的图片数据"
    },
    "image_url": {
      "type": "string",
      "desc": "图片的 URL地址，通过URL下载人脸图片到本地。空字符串为无效值。"
    },
    "binary_image": {
      "type": "BinaryImage",
      "desc": "二进制图像数据"
    }
  },
  "AudioData": {
    "__parentType": [],
    "type": {
      "type": "AudioType",
      "desc": "音频类别"
    },
    "base64": {
      "type": "string",
      "desc": "音频base64数据"
    },
    "binary_data": {
      "type": "bytes",
      "desc": "音频二进制数据"
    },
    "file_name": {
      "type": "string",
      "desc": "对应的音频文件路径，可为空"
    }
  },
  "DateFormat": {
    "__parentType": ["UserInfo", "UserInfo"],
    "year": {
      "type": "uint32",
      "desc": ""
    },
    "month": {
      "type": "uint32",
      "desc": ""
    },
    "day": {
      "type": "uint32",
      "desc": ""
    }
  },
  "AuthTime": {
    "__parentType": [],
    "auth_start_time": {
      "type": "uint32",
      "desc": "可以被识别的起始时间。0表示不受限制。Unix时间戳，单位s"
    },
    "auth_end_time": {
      "type": "uint32",
      "desc": "可以被识别的终止时间。0表示不受限制。Unix时间戳，单位s"
    }
  },
  "GuestExtraInfo": {
    "__parentType": ["UserInfo"],
    "interviewee": {
      "type": "string",
      "desc": "受访人员"
    },
    "purpose": {
      "type": "string",
      "desc": "来访目的"
    }
  },
  "SoftwareVersion": {
    "__parentType": [],
    "version": {
      "type": "string",
      "desc": ""
    }
  },
  "UserInfo": {
    "__parentType": ["UserAIInfo"],
    "name": {
      "type": "string",
      "desc": "用户姓名，必填"
    },
    "phone": {
      "type": "string",
      "desc": "用户电话号码"
    },
    "user_type": {
      "type": "UserType",
      "desc": "预定义类别"
    },
    "group_ids": {
      "type": "string",
      "desc": "组名列表，以"
    },
    "internal_number": {
      "type": "string",
      "desc": "内部编号"
    },
    "card_number": {
      "type": "string",
      "desc": "卡号"
    },
    "id_number": {
      "type": "string",
      "desc": "身份证号"
    },
    "password": {
      "type": "string",
      "desc": "密码"
    },
    "email": {
      "type": "string",
      "desc": "邮箱"
    },
    "entry_time": {
      "type": "DateFormat",
      "desc": "入职时间"
    },
    "birthday": {
      "type": "DateFormat",
      "desc": "生日"
    },
    "gender": {
      "type": "Gender",
      "desc": "性别"
    },
    "prompting": {
      "type": "string",
      "desc": "自定义提示语：如果为空，则采用默认提示语"
    },
    "comment": {
      "type": "string",
      "desc": "备注"
    },
    "guest_info": {
      "type": "GuestExtraInfo",
      "desc": "当UserType_Guest，可选填该项"
    }
  },
  "UserAIInfo": {
    "__parentType": [],
    "user_id": {
      "type": "string",
      "desc": "用户唯一编码"
    },
    "user_info": {
      "type": "UserInfo",
      "desc": "用户信息"
    },
    "score": {
      "type": "uint32",
      "desc": "用户分数"
    },
    "timestamp": {
      "type": "uint32",
      "desc": "时间戳"
    }
  },
  "FaceMatchInfo": {
    "__parentType": [],
    "name1": {
      "type": "string",
      "desc": "1:1 用户1"
    },
    "name2": {
      "type": "string",
      "desc": "1:1 用户2"
    },
    "score": {
      "type": "uint32",
      "desc": "用户分数"
    },
    "timestamp": {
      "type": "uint32",
      "desc": "时间戳"
    }
  },
  "AIFaceLiveness": {
    "__parentType": [],
    "type": {
      "type": "AIFaceLivenessType",
      "desc": "活体类型"
    },
    "rgb_threshold": {
      "type": "int32",
      "desc": "RGB 活体通过阈值，范围[0-100]，默认值90；大于该阈值判断为活体"
    },
    "nir_threshold": {
      "type": "int32",
      "desc": "NIR 活体通过阈值，范围[0-100]，默认值90；大于该阈值判断为活体"
    }
  },
  "AIFaceQualityControlCustom": {
    "__parentType": ["AIFaceQualityControlConfig"],
    "umvalueMin": {
      "type": "int32",
      "desc": "人脸亮度最小阈值。范围0-255，最小值0，最大值255"
    },
    "umvalueMax": {
      "type": "int32",
      "desc": "人脸亮度最大阈值。范围0-255 ，最小值0，最大值255"
    },
    "pose": {
      "type": "int32",
      "desc": "人脸角度阈值。范围：(1-90)，最小值是1，最大值是90。小于该阈值，判断为正脸"
    },
    "occlusion": {
      "type": "int32",
      "desc": "遮挡阈值。范围：(1-99)，最小值 是1，最大值是99。小于该阈值，判断为无遮挡"
    },
    "blur": {
      "type": "int32",
      "desc": "模糊阈值。范围：(1-99)，最小值 是1，最大值是99。小于该阈值，判断为清晰人脸"
    }
  },
  "AIFaceQualityControlConfig": {
    "__parentType": [],
    "face_field": {
      "type": "AIFaceQualityControlWorkField",
      "desc": "质量控制作用域"
    },
    "face_quality_control": {
      "type": "AIFaceQualityControl",
      "desc": "图片质量控制"
    },
    "face_quality_custom": {
      "type": "AIFaceQualityControlCustom",
      "desc": "自定义质量参数"
    }
  },
  "ActionCommonInfo": {
    "__parentType": [],
    "timestamp": {
      "type": "uint64",
      "desc": "动作时间戳，建议每个消息都带上。time_since_epoch，in ms"
    },
    "info": {
      "type": "string",
      "desc": "动作携带信息"
    }
  },
  "ActionCommonResult": {
    "__parentType": [],
    "status": {
      "type": "int32",
      "desc": "结果状态值"
    },
    "info": {
      "type": "string",
      "desc": "结果状态信息"
    },
    "timestamp_begin": {
      "type": "uint64",
      "desc": "开始处理时间，time_since_epoch，in ms"
    },
    "timestamp_end": {
      "type": "uint64",
      "desc": "结果上报时间，time_since_epoch，in ms"
    }
  },
  "DeviceID": {
    "__parentType": [],
    "device_id": {
      "type": "string",
      "desc": "设备的唯一出厂标识码"
    },
    "device_code": {
      "type": "string",
      "desc": "device_code来自设备的唯一出厂标识码"
    }
  },
  "CardInfo": {
    "__parentType": [],
    "card_num": {
      "type": "string",
      "desc": ""
    },
    "timestamp": {
      "type": "uint32",
      "desc": ""
    }
  },
  "BoundingBox": {
    "__parentType": ["AIPipelineChannelResult"],
    "rect": {
      "type": "Rectf",
      "desc": ""
    },
    "conf": {
      "type": "float",
      "desc": ""
    }
  },
  "AIFaceLandmark": {
    "__parentType": ["AIPipelineChannelResult"],
    "index": {
      "type": "float",
      "desc": ""
    },
    "size": {
      "type": "float",
      "desc": ""
    },
    "float": {
      "type": "repeated",
      "desc": ""
    },
    "score": {
      "type": "float",
      "desc": ""
    }
  },
  "AIFacePose": {
    "__parentType": ["AIPipelineQuality"],
    "status": {
      "type": "AIFaceQualityStatus",
      "desc": "当前检测值状态"
    },
    "pitch": {
      "type": "float",
      "desc": ""
    },
    "roll": {
      "type": "float",
      "desc": ""
    },
    "yaw": {
      "type": "float",
      "desc": ""
    },
    "threshold": {
      "type": "float",
      "desc": "阈值"
    }
  },
  "AIFaceIlluminance": {
    "__parentType": ["AIPipelineQuality"],
    "status": {
      "type": "AIFaceQualityStatus",
      "desc": "当前检测值状态"
    },
    "illuminance": {
      "type": "int32",
      "desc": "[0, 255], face is brighter when value is more closed to 255"
    },
    "threshold_min_illuminance": {
      "type": "int32",
      "desc": "光照阈值：最小值"
    },
    "threshold_max_illuminance": {
      "type": "int32",
      "desc": "光照阈值：最大值"
    }
  },
  "AIFaceOcclusion": {
    "__parentType": ["AIPipelineQuality"],
    "status": {
      "type": "AIFaceQualityStatus",
      "desc": "当前检测值状态"
    },
    "float": {
      "type": "repeated",
      "desc": "阈值"
    }
  },
  "AIFaceBlur": {
    "__parentType": ["AIPipelineQuality"],
    "status": {
      "type": "AIFaceQualityStatus",
      "desc": "当前检测值状态"
    },
    "blur": {
      "type": "float",
      "desc": "[0, 1], face blur will be more when score is closed to 1."
    },
    "threshold": {
      "type": "float",
      "desc": "阈值"
    }
  },
  "AIPipelineQuality": {
    "__parentType": ["AIPipelineChannelResult"],
    "pose": {
      "type": "AIFacePose",
      "desc": "人脸角度"
    },
    "illumination": {
      "type": "AIFaceIlluminance",
      "desc": "人脸光照"
    },
    "occlusion": {
      "type": "AIFaceOcclusion",
      "desc": "人脸遮挡"
    },
    "blur": {
      "type": "AIFaceBlur",
      "desc": "人脸模糊度"
    },
    "total_status": {
      "type": "AIFaceQualityStatus",
      "desc": "整体结果"
    },
    "span_before_quality": {
      "type": "uint64",
      "desc": ""
    },
    "span_after_quality": {
      "type": "uint64",
      "desc": ""
    }
  },
  "AIPipelineLiveness": {
    "__parentType": ["AIPipelineChannelResult"],
    "score": {
      "type": "float",
      "desc": "活体分值"
    },
    "threshold": {
      "type": "float",
      "desc": "对应的活体阈值"
    },
    "status": {
      "type": "AIFaceLivenessStatus",
      "desc": "活体是否通过"
    }
  },
  "AIPipelineChannelResult": {
    "__parentType": ["AIPipelineResult", "AIPipelineResult"],
    "bbox": {
      "type": "BoundingBox",
      "desc": "检测区域"
    },
    "landmark": {
      "type": "AIFaceLandmark",
      "desc": "landmark值"
    },
    "quality": {
      "type": "AIPipelineQuality",
      "desc": "各项质量分"
    },
    "liveness": {
      "type": "AIPipelineLiveness",
      "desc": "活体值"
    },
    "tracking_id": {
      "type": "int32",
      "desc": "当前人脸tracker id"
    }
  },
  "AIFeature1vsNTop1": {
    "__parentType": ["AIFeatureResult"],
    "feature_id": {
      "type": "int32",
      "desc": "1:N Top1 索引"
    },
    "score": {
      "type": "float",
      "desc": "1:N Top1 分值"
    },
    "threshold": {
      "type": "float",
      "desc": "对应的活体阈值"
    },
    "status": {
      "type": "AIFace1vsNStatus",
      "desc": "1:N 结果"
    }
  },
  "AIFeatureResult": {
    "__parentType": ["AIPipelineResult"],
    "float": {
      "type": "repeated",
      "desc": "特征值"
    },
    "top1": {
      "type": "AIFeature1vsNTop1",
      "desc": "如果有做1：N，则需要返回该值"
    },
    "span_after_feature": {
      "type": "uint64",
      "desc": ""
    },
    "failed_before_success": {
      "type": "int32",
      "desc": ""
    },
    "span_before_extract_feature": {
      "type": "uint64",
      "desc": ""
    },
    "span_after_extract_feature": {
      "type": "uint64",
      "desc": ""
    },
    "span_before_search_feature": {
      "type": "uint64",
      "desc": ""
    },
    "span_after_search_feature": {
      "type": "uint64",
      "desc": ""
    }
  },
  "AIPipelineResult": {
    "__parentType": [],
    "rgb_result": {
      "type": "AIPipelineChannelResult",
      "desc": "rgb通道值"
    },
    "nir_result": {
      "type": "AIPipelineChannelResult",
      "desc": "nir通道值"
    },
    "liveness_status": {
      "type": "AIFaceLivenessStatus",
      "desc": "活体是否通过"
    },
    "feature": {
      "type": "AIFeatureResult",
      "desc": "特征相关值"
    },
    "timestamp": {
      "type": "uint32",
      "desc": "识别记录的时间"
    }
  },
  "TemperatureResult": {
    "__parentType": [],
    "temperature": {
      "type": "float",
      "desc": "检测到的人体温度"
    },
    "temperature_threshold": {
      "type": "float",
      "desc": "人体温度阈值"
    },
    "status": {
      "type": "TemperatureStatus",
      "desc": "体温状态"
    }
  },
  "MaskResult": {
    "__parentType": [],
    "status": {
      "type": "MaskStatus",
      "desc": "口罩状态"
    },
    "mask_score": {
      "type": "float",
      "desc": "口罩分值"
    },
    "mask_threshold": {
      "type": "float",
      "desc": "口罩阈值"
    }
  },
  "StatisticsResult": {
    "__parentType": [],
    "auth_start_time": {
      "type": "int32",
      "desc": ""
    },
    "auth_end_time": {
      "type": "int32",
      "desc": ""
    },
    "user_attribute": {
      "type": "int32",
      "desc": ""
    },
    "blacklist_pass": {
      "type": "int32",
      "desc": ""
    },
    "search_db_result": {
      "type": "int32",
      "desc": ""
    },
    "span_search_db": {
      "type": "uint64",
      "desc": ""
    },
    "current_ts": {
      "type": "int32",
      "desc": ""
    },
    "success_value": {
      "type": "int32",
      "desc": ""
    },
    "span_before_db": {
      "type": "uint64",
      "desc": ""
    }
  },
  "Prompting": {
    "__parentType": [],
    "main_msg": {
      "type": "string",
      "desc": "设备主欢迎语:支持中文、数字、和英文，不支持符号，20个字符限制"
    },
    "success_msg": {
      "type": "string",
      "desc": "识别成功提示语:支持中文、数字、和英文，不支持符号，20个字符限制"
    },
    "fail_msg": {
      "type": "string",
      "desc": "识别失败提示语:支持中文、数字、和英文，不支持符号，20个字符限制"
    },
    "error_msg": {
      "type": "string",
      "desc": "识别异常提示语:支持中文、数字、和英文，不支持符号，20个字符限制"
    },
    "show_name": {
      "type": "SwitchMode",
      "desc": "识别成功后是否展示姓名"
    },
    "show_photo": {
      "type": "SwitchMode",
      "desc": "头像显示模式开启使能:显示的头像信息为当前用于识别的图片，而不上是注册缩略照片"
    },
    "blacklist_pass": {
      "type": "SwitchMode",
      "desc": "若是通行策略下发，在可通行的时间段内，黑名单开门关，则黑名单不开门；若是黑名单通行开，则黑名单人员在该时段通行；"
    },
    "show_name_off_msg": {
      "type": "string",
      "desc": "识别成功后如果不展示姓名，则展示该信息。空字符串为无效值。"
    }
  },
  "AudioPrompting": {
    "__parentType": [],
    "audio_on": {
      "type": "SwitchMode",
      "desc": "语音播报开关，关闭则不进行语音播报"
    },
    "audio_pack": {
      "type": "string",
      "desc": "语音播报资源包URL。空字符串为无效值。"
    },
    "feedback_audio": {
      "type": "SwitchMode",
      "desc": "音效开关，音效开关和语音播报开关互斥"
    }
  },
  "ScreenSaver": {
    "__parentType": [],
    "Image": {
      "type": "repeated",
      "desc": "与saas的交互走url。http接口走base64编码：格式要求：jpg，大小：720*1280，最多5张图片"
    },
    "interval_in_ms": {
      "type": "uint32",
      "desc": "屏保切换时间间隔,0为无效值，不生效。"
    }
  },
  "AIScreenSaveConfig": {
    "__parentType": [],
    "on_off": {
      "type": "SwitchMode",
      "desc": "开关"
    },
    "timeout_in_ms": {
      "type": "uint32",
      "desc": "单位ms。如果是10*1000，则在10秒内，没有新的人脸被检测，将触发屏保。0为无效值。"
    }
  },
  "AIFaceThreshold": {
    "__parentType": [],
    "recog_thresh": {
      "type": "int32",
      "desc": "范围[0-100]，默认值80；"
    }
  },
  "WeekRebootConfig": {
    "__parentType": ["AutoRebootConfig"],
    "reboot_time_24h": {
      "type": "uint32",
      "desc": ""
    },
    "uint32": {
      "type": "repeated",
      "desc": ""
    }
  },
  "AutoRebootConfig": {
    "__parentType": [],
    "reboot_": {
      "type": "oneof",
      "desc": ""
    },
    "manual_switch": {
      "type": "SwitchMode",
      "desc": "手动重启，即关闭自动重启"
    },
    "everyday_reboot_time_24h": {
      "type": "uint32",
      "desc": "每天定时重启"
    },
    "week_reboot": {
      "type": "WeekRebootConfig",
      "desc": "每周定时重启"
    }
  },
  "IOConfig": {
    "__parentType": [],
    "gate_open_timeout": {
      "type": "int32",
      "desc": "开门超时时长:设置开门超时报警阈值，默认10s。超过设定的时间时，设备将上报报警信息，可联动报警输出。0为无效值。"
    },
    "gate_open_time": {
      "type": "int32",
      "desc": "开门时间:识别成功通过门保持打开状态的时间，默认5s。0为无效值。"
    },
    "gate_open_mode": {
      "type": "GateOpenMode",
      "desc": "开门方式:本地继电器/韦根26/韦根34。"
    },
    "relay_mode": {
      "type": "RelayMode",
      "desc": "继电器控制:继电器常开、常闭"
    },
    "alarm_in_switch": {
      "type": "SwitchMode",
      "desc": "报警输入:打开表示接入报警信号"
    },
    "AlarmOutputOption": {
      "type": "repeated",
      "desc": "报警输出组合，含门磁超时、黑名单告警、非活体攻击，可多选"
    },
    "gpio_in1_switch": {
      "type": "SwitchMode",
      "desc": "GPIO输入-1（门磁）:打开表示接入门磁"
    },
    "gpio_in2_switch": {
      "type": "SwitchMode",
      "desc": "GPIO输入-1（开门按钮）:打开表示接入门磁"
    },
    "gpio_out1_switch": {
      "type": "GpioOutputOption",
      "desc": "GPIO输出-1（门铃）"
    },
    "gpio_out2_switch": {
      "type": "GpioOutputOption",
      "desc": "GPIO输出-2（报警）"
    }
  },
  "StandbyConfig": {
    "__parentType": [],
    "on_off": {
      "type": "SwitchMode",
      "desc": "待机配置"
    },
    "timeout_in_ms": {
      "type": "uint32",
      "desc": "待机超时。0为无效值。"
    }
  },
  "MaskConfig": {
    "__parentType": [],
    "on_off": {
      "type": "SwitchMode",
      "desc": ""
    }
  },
  "TemperatureConfig": {
    "__parentType": [],
    "on_off": {
      "type": "SwitchMode",
      "desc": ""
    },
    "threshold": {
      "type": "float",
      "desc": ""
    }
  }
};
