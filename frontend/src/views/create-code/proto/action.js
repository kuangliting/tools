export default {
    "WebAction": {
        "__parentType": [],
        "common_info": {
            "type": "ActionCommonInfo",
            "desc": "动作通用消息",
            "isArray": false
        },
        "task_id": {
            "type": "string",
            "desc": "",
            "isArray": false
        },
        "token": {
            "type": "string",
            "desc": "",
            "isArray": false
        },
        "config_multimedia_video_info": {
            "type": "ConfigMultiMediaVideoInfo",
            "desc": "",
            "isArray": false
        },
        "config_multimedia_audio_info": {
            "type": "ConfigMultiMediaAudioInfo",
            "desc": "",
            "isArray": false
        },
        "get_system_version_info": {
            "type": "GetSystemVersionInfo",
            "desc": "get system version info (software / hardware / sdk and so on)",
            "isArray": false
        },
        "get_system_hardware_info": {
            "type": "GetSystemHardwareInfo",
            "desc": "get system hardware info (memory / disk and so on)",
            "isArray": false
        },
        "config_scheduled_reboot": {
            "type": "ConfigScheduledReboot",
            "desc": "config scheduled reboot params",
            "isArray": false
        },
        "export_system_log": {
            "type": "ExportSystemLog",
            "desc": "export system log",
            "isArray": false
        },
        "restore_factory_setting": {
            "type": "RestoreFactorySetting",
            "desc": "restore device to factory setings",
            "isArray": false
        },
        "restore_default_setting": {
            "type": "RestoreDefaultSetting",
            "desc": "restore device to default setings",
            "isArray": false
        },
        "reboot_device": {
            "type": "RebootDevice",
            "desc": "reboot device",
            "isArray": false
        },
        "software_upgrade": {
            "type": "SoftwareUpgrade",
            "desc": "device software upgrade",
            "isArray": false
        },
        "get_maintain_params": {
            "type": "GetMaintainParams",
            "desc": "get maintain params",
            "isArray": false
        },
        "login_account": {
            "type": "LoginAccount",
            "desc": "do login",
            "isArray": false
        },
        "setup_account": {
            "type": "SetupAccount",
            "desc": "delete recognition records",
            "isArray": false
        }
    },
    "WebActionResult": {
        "__parentType": [],
        "result": {
            "type": "ActionCommonResult",
            "desc": "通用结果定义，必填",
            "isArray": false
        },
        "task_id": {
            "type": "string",
            "desc": "",
            "isArray": false
        },
        "config_multimedia_video_info": {
            "type": "ConfigMultiMediaVideoInfoResult",
            "desc": "",
            "isArray": false
        },
        "config_multimedia_audio_info": {
            "type": "ConfigMultiMediaAudioInfoResult",
            "desc": "",
            "isArray": false
        },
        "get_system_version_info": {
            "type": "GetSystemVersionInfoResult",
            "desc": "return system version info",
            "isArray": false
        },
        "get_system_hardware_info": {
            "type": "GetSystemHardwareInfoResult",
            "desc": "return system hardware info",
            "isArray": false
        },
        "config_scheduled_reboot": {
            "type": "ConfigScheduledRebootResult",
            "desc": "return action result and params",
            "isArray": false
        },
        "export_system_log": {
            "type": "ExportSystemLogResult",
            "desc": "return system log string",
            "isArray": false
        },
        "restore_factory_setting": {
            "type": "RestoreFactorySettingResult",
            "desc": "return action result",
            "isArray": false
        },
        "restore_default_setting": {
            "type": "RestoreDefaultSettingResult",
            "desc": "return action result",
            "isArray": false
        },
        "reboot_device": {
            "type": "RebootDeviceResult",
            "desc": "return action result",
            "isArray": false
        },
        "software_upgrade": {
            "type": "SoftwareUpgradeResult",
            "desc": "return action result",
            "isArray": false
        },
        "get_maintain_params": {
            "type": "GetMaintainParamsResult",
            "desc": "return action result",
            "isArray": false
        },
        "login_status": {
            "type": "LoginStatus",
            "desc": "login status feedback",
            "isArray": false
        },
        "setup_account_result": {
            "type": "SetupAccountResult",
            "desc": "delete recognition records",
            "isArray": false
        }
    },
    "VideoConfig": {
        "__parentType": ["DumuConfig"],
        "video_type": {
            "type": "VideoType",
            "desc": "",
            "isArray": false
        }
    },
    "DumuConfig": {
        "__parentType": [],
        "video_config": {
            "type": "VideoConfig",
            "desc": "",
            "isArray": false
        }
    },
    "ActionCommonInfo": {
        "__parentType": ["WebAction"],
        "timestamp": {
            "type": "uint64",
            "desc": "动作时间戳，建议每个消息都带上。time_since_epoch，in ms",
            "isArray": false
        },
        "info": {
            "type": "string",
            "desc": "动作携带信息",
            "isArray": false
        }
    },
    "ActionCommonResult": {
        "__parentType": ["WebActionResult", "LoginStatus", "SetupAccountResult"],
        "status": {
            "type": "int32",
            "desc": "结果状态值",
            "isArray": false
        },
        "info": {
            "type": "string",
            "desc": "结果状态信息",
            "isArray": false
        },
        "timestamp_begin": {
            "type": "uint64",
            "desc": "开始处理时间，time_since_epoch，in ms",
            "isArray": false
        },
        "timestamp_end": {
            "type": "uint64",
            "desc": "结果上报时间，time_since_epoch，in ms",
            "isArray": false
        }
    },
    "Version": {
        "__parentType": [],
        "major16_minor16": {
            "type": "uint32",
            "desc": "版本管理,高16位为主版本号，低16位为次版本号",
            "isArray": false
        }
    },
    "ConfigSystemTimeInfo": {
        "__parentType": [],
        "config_time_info": {
            "type": "SystemTimeInfo",
            "desc": "",
            "isArray": false
        },
        "task_id": {
            "type": "string",
            "desc": "请求任务id，建议ms时间戳+6位随机数",
            "isArray": false
        }
    },
    "ConfigScheduledReboot": {
        "__parentType": ["WebAction"],
        "reboot_config": {
            "type": "RebootTimeConfig",
            "desc": "",
            "isArray": false
        },
        "task_id": {
            "type": "string",
            "desc": "请求任务id，建议ms时间戳+6位随机数",
            "isArray": false
        }
    },
    "ConfigHeartBeatPush": {
        "__parentType": [],
        "heart_beat_push_info": {
            "type": "HeartBeatPushInfo",
            "desc": "",
            "isArray": false
        },
        "task_id": {
            "type": "string",
            "desc": "请求任务id，建议ms时间戳+6位随机数",
            "isArray": false
        }
    },
    "ConfigRegisterPush": {
        "__parentType": [],
        "register_push_info": {
            "type": "RegisterPushInfo",
            "desc": "",
            "isArray": false
        },
        "task_id": {
            "type": "string",
            "desc": "请求任务id，建议ms时间戳+6位随机数",
            "isArray": false
        }
    },
    "ConfigDeviceParam": {
        "__parentType": [],
        "operation": {
            "type": "DeviceOperation",
            "desc": "",
            "isArray": false
        },
        "device_config": {
            "type": "DeviceConfigParam",
            "desc": "",
            "isArray": false
        },
        "task_id": {
            "type": "string",
            "desc": "请求任务id，建议ms时间戳+6位随机数",
            "isArray": false
        }
    },
    "ConfigMultiMediaVideoInfo": {
        "__parentType": ["WebAction"],
        "stream_channel": {
            "type": "StreamSelection",
            "desc": "",
            "isArray": false
        },
        "stream_type": {
            "type": "StreamType",
            "desc": "",
            "isArray": false
        },
        "resolution": {
            "type": "VideoResolution",
            "desc": "",
            "isArray": false
        },
        "bitrate_type": {
            "type": "VideoStreamBitRateType",
            "desc": "",
            "isArray": false
        },
        "key_frame_interval": {
            "type": "uint32",
            "desc": "",
            "isArray": false
        },
        "framerate": {
            "type": "uint32",
            "desc": "",
            "isArray": false
        },
        "bitrate_level": {
            "type": "ConstantBitRateLevel",
            "desc": "",
            "isArray": false
        },
        "task_id": {
            "type": "string",
            "desc": "",
            "isArray": false
        }
    },
    "ConfigMultiMediaAudioInfo": {
        "__parentType": ["WebAction"],
        "audio_type": {
            "type": "AudioType",
            "desc": "",
            "isArray": false
        },
        "audio_sample_rate": {
            "type": "AudioSampleRate",
            "desc": "",
            "isArray": false
        },
        "audio_volume": {
            "type": "uint32",
            "desc": "",
            "isArray": false
        },
        "audio_denoise": {
            "type": "bool",
            "desc": "",
            "isArray": false
        },
        "task_id": {
            "type": "string",
            "desc": "",
            "isArray": false
        }
    },
    "NetworkAdaptor": {
        "__parentType": [],
        "node_name": {
            "type": "string",
            "desc": "network adaptor name",
            "isArray": false
        },
        "mode": {
            "type": "NetworkMode",
            "desc": "network mode",
            "isArray": false
        },
        "ip_version": {
            "type": "IpProtocolVersion",
            "desc": "ip version",
            "isArray": false
        },
        "ip_addr": {
            "type": "string",
            "desc": "network adaptor ip addr",
            "isArray": false
        },
        "netmask": {
            "type": "string",
            "desc": "network adaptor netmask",
            "isArray": false
        },
        "gateway": {
            "type": "string",
            "desc": "network adaptor gateway",
            "isArray": false
        },
        "mac_addr": {
            "type": "string",
            "desc": "network adaptor mac addr",
            "isArray": false
        },
        "ipv6_mode": {
            "type": "NetworkMode",
            "desc": "network ipv6 mode",
            "isArray": false
        },
        "ipv6_addr": {
            "type": "string",
            "desc": "network adaptor ipv6 addr",
            "isArray": false
        },
        "ipv6_prefixlen": {
            "type": "uint32",
            "desc": "network adaptor ipv6 prefixlen",
            "isArray": false
        },
        "ipv6_gateway": {
            "type": "string",
            "desc": "network adaptor ipv6 gateway",
            "isArray": false
        },
        "b_dns_manual": {
            "type": "bool",
            "desc": "DNS service true:manual acquire / false:automatic acquire",
            "isArray": false
        },
        "first_dns": {
            "type": "string",
            "desc": "",
            "isArray": false
        },
        "backup_dns": {
            "type": "string",
            "desc": "",
            "isArray": false
        }
    },
    "NetworkAdaptorList": {
        "__parentType": [],
        "network_adaptors": {
            "type": "NetworkAdaptor",
            "desc": "List of multiple network adaptors",
            "isArray": true
        }
    },
    "DateTime": {
        "__parentType": [],
        "year": {
            "type": "uint32",
            "desc": "since 1900",
            "isArray": false
        },
        "mouth": {
            "type": "uint32",
            "desc": "mouth 1-12",
            "isArray": false
        },
        "day": {
            "type": "uint32",
            "desc": "day 1~31",
            "isArray": false
        },
        "week": {
            "type": "uint32",
            "desc": "week 0~6",
            "isArray": false
        },
        "hour": {
            "type": "uint32",
            "desc": "hour 0~23",
            "isArray": false
        },
        "minute": {
            "type": "uint32",
            "desc": "minute 0~59",
            "isArray": false
        },
        "second": {
            "type": "uint32",
            "desc": "second 0~59",
            "isArray": false
        },
        "mer_flag": {
            "type": "MeridiemFlag",
            "desc": "A/PM for TIME_FORMAT_12",
            "isArray": false
        }
    },
    "SystemTimeInfo": {
        "__parentType": ["ConfigSystemTimeInfo"],
        "time_format": {
            "type": "TimeFormat",
            "desc": "",
            "isArray": false
        },
        "time_zone": {
            "type": "TimeZone",
            "desc": "time zone",
            "isArray": false
        },
        "system_time": {
            "type": "uint64",
            "desc": "seconds since January 1, 1970",
            "isArray": false
        },
        "ntp_switch": {
            "type": "NtpSwitch",
            "desc": "1:start ntp service/0:stop ntp service",
            "isArray": false
        },
        "server_addr": {
            "type": "string",
            "desc": "",
            "isArray": false
        },
        "port": {
            "type": "uint32",
            "desc": "",
            "isArray": false
        },
        "update_interval": {
            "type": "uint32",
            "desc": "ntp update interval(minutes)",
            "isArray": false
        }
    },
    "SystemVersion": {
        "__parentType": [],
        "device_serial_number": {
            "type": "string",
            "desc": "",
            "isArray": false
        },
        "hardware_version": {
            "type": "string",
            "desc": "",
            "isArray": false
        },
        "firmware_version": {
            "type": "string",
            "desc": "",
            "isArray": false
        },
        "software_version": {
            "type": "string",
            "desc": "",
            "isArray": false
        },
        "sdk_version": {
            "type": "string",
            "desc": "",
            "isArray": false
        },
        "qt_version": {
            "type": "string",
            "desc": "",
            "isArray": false
        },
        "web_version": {
            "type": "string",
            "desc": "",
            "isArray": false
        }
    },
    "HardwareInfo": {
        "__parentType": [],
        "memory_total_size": {
            "type": "uint32",
            "desc": "memory total size(MB) in device",
            "isArray": false
        },
        "memory_free_size": {
            "type": "uint32",
            "desc": "memory free size(MB) in device",
            "isArray": false
        },
        "disk_total_size": {
            "type": "uint32",
            "desc": "disk total size(MB) in device",
            "isArray": false
        },
        "disk_free_size": {
            "type": "uint32",
            "desc": "disk free size(MB) in device",
            "isArray": false
        },
        "cpu_usage_percentage": {
            "type": "uint32",
            "desc": "0~100",
            "isArray": false
        },
        "cpu_temperature": {
            "type": "uint32",
            "desc": "centigrade",
            "isArray": false
        },
        "hardware_crypto_status": {
            "type": "bool",
            "desc": "crypto status,true for success,false for failed",
            "isArray": false
        }
    },
    "RebootTimeConfig": {
        "__parentType": ["ConfigScheduledReboot"],
        "reboot_type": {
            "type": "RebootTimeType",
            "desc": "",
            "isArray": false
        },
        "day": {
            "type": "uint32",
            "desc": "day 1~30",
            "isArray": false
        },
        "week": {
            "type": "uint32",
            "desc": "week 0~6",
            "isArray": false
        },
        "hour": {
            "type": "uint32",
            "desc": "hour 0~23",
            "isArray": false
        },
        "minute": {
            "type": "uint32",
            "desc": "minute 0~59",
            "isArray": false
        },
        "second": {
            "type": "uint32",
            "desc": "second 0~59",
            "isArray": false
        }
    },
    "CapturePushInfo": {
        "__parentType": ["AddCapturePushTask", "EditCapturePushTask"],
        "task_name": {
            "type": "string",
            "desc": "",
            "isArray": false
        },
        "upload_data_type": {
            "type": "UploadDataType",
            "desc": "",
            "isArray": false
        },
        "service_type": {
            "type": "ReceiveServiceType",
            "desc": "",
            "isArray": false
        },
        "server_addr": {
            "type": "string",
            "desc": "",
            "isArray": false
        },
        "port": {
            "type": "uint32",
            "desc": "",
            "isArray": false
        },
        "user_name": {
            "type": "string",
            "desc": "",
            "isArray": false
        },
        "pass_word": {
            "type": "string",
            "desc": "",
            "isArray": false
        },
        "alarm_resend_interval": {
            "type": "uint32",
            "desc": "1~3600s",
            "isArray": false
        },
        "alarm_repeat_times": {
            "type": "uint32",
            "desc": "",
            "isArray": false
        },
        "transmission_channels": {
            "type": "uint32",
            "desc": "32bits each bit represent a channel (from low to high)",
            "isArray": false
        },
        "b_task_enabled": {
            "type": "bool",
            "desc": "whether enable the task",
            "isArray": false
        },
        "b_data_retransmit_open": {
            "type": "bool",
            "desc": "true for data retransmit function open,false for close,only for http service",
            "isArray": false
        }
    },
    "HeartBeatPushInfo": {
        "__parentType": ["ConfigHeartBeatPush"],
        "server_addr": {
            "type": "string",
            "desc": "",
            "isArray": false
        },
        "interval": {
            "type": "uint32",
            "desc": "heart beat interval(1~3600s)",
            "isArray": false
        }
    },
    "RegisterPushInfo": {
        "__parentType": ["ConfigRegisterPush"],
        "server_addr": {
            "type": "string",
            "desc": "",
            "isArray": false
        }
    },
    "UpgradeInfo": {
        "__parentType": [],
        "status": {
            "type": "UpgradeStatus",
            "desc": "更新状态",
            "isArray": false
        },
        "upgrade_percentage": {
            "type": "uint32",
            "desc": "[0,100]",
            "isArray": false
        },
        "message": {
            "type": "string",
            "desc": "输出消息",
            "isArray": false
        }
    },
    "CaptureTime": {
        "__parentType": ["CaptureTimePeriod", "CaptureTimePeriod"],
        "hour": {
            "type": "uint32",
            "desc": "",
            "isArray": false
        },
        "minute": {
            "type": "uint32",
            "desc": "",
            "isArray": false
        }
    },
    "CaptureTimePeriod": {
        "__parentType": [],
        "start_time": {
            "type": "CaptureTime",
            "desc": "",
            "isArray": false
        },
        "end_time": {
            "type": "CaptureTime",
            "desc": "",
            "isArray": false
        }
    },
    "FaceRotateAngle": {
        "__parentType": ["FaceQualitySetting"],
        "pitch": {
            "type": "uint32",
            "desc": "",
            "isArray": false
        },
        "yaw": {
            "type": "uint32",
            "desc": "",
            "isArray": false
        },
        "roll": {
            "type": "uint32",
            "desc": "",
            "isArray": false
        }
    },
    "TargetStaffGroup": {
        "__parentType": ["DeviceConfigParam"],
        "staff_group": {
            "type": "string",
            "desc": "",
            "isArray": true
        }
    },
    "OnvifDevice": {
        "__parentType": [],
        "device_id": {
            "type": "uint32",
            "desc": "",
            "isArray": false
        },
        "ip": {
            "type": "string",
            "desc": "",
            "isArray": false
        },
        "port": {
            "type": "uint32",
            "desc": "",
            "isArray": false
        }
    },
    "OnvifDeviceList": {
        "__parentType": [],
        "device": {
            "type": "OnvifDevice",
            "desc": "",
            "isArray": true
        }
    },
    "Gb28181Addr": {
        "__parentType": ["ServerAddr"],
        "peer_ip": {
            "type": "string",
            "desc": "IP地址",
            "isArray": false
        },
        "peer_port": {
            "type": "uint32",
            "desc": "端口号",
            "isArray": false
        },
        "peer_platform_id": {
            "type": "string",
            "desc": "平台ID",
            "isArray": false
        },
        "peer_video_cha_id": {
            "type": "string",
            "desc": "通道ID",
            "isArray": false
        },
        "sip_username": {
            "type": "string",
            "desc": "SIP认证用户名",
            "isArray": false
        },
        "sip_password": {
            "type": "string",
            "desc": "SIP认证密码",
            "isArray": false
        }
    },
    "Gat1400Addr": {
        "__parentType": ["ServerAddr"],
        "ip": {
            "type": "string",
            "desc": "设备IP",
            "isArray": false
        },
        "device_id": {
            "type": "string",
            "desc": "设备ID",
            "isArray": false
        },
        "username": {
            "type": "string",
            "desc": "用户名",
            "isArray": false
        },
        "password": {
            "type": "string",
            "desc": "密码",
            "isArray": false
        }
    },
    "ServerAddr": {
        "__parentType": ["DeviceConfigParam"],
        "addr": {
            "type": "string",
            "desc": "",
            "isArray": false
        },
        "port": {
            "type": "uint32",
            "desc": "",
            "isArray": false
        },
        "user_name": {
            "type": "string",
            "desc": "",
            "isArray": false
        },
        "pass_word": {
            "type": "string",
            "desc": "",
            "isArray": false
        },
        "gb28181_addr": {
            "type": "Gb28181Addr",
            "desc": "",
            "isArray": false
        },
        "gat1400_addr": {
            "type": "Gat1400Addr",
            "desc": "",
            "isArray": false
        }
    },
    "FaceQualitySetting": {
        "__parentType": ["DeviceConfigParam"],
        "face_require": {
            "type": "FaceQualityRequire",
            "desc": "",
            "isArray": false
        },
        "face_confidence": {
            "type": "uint32",
            "desc": "[1,100]",
            "isArray": false
        },
        "face_clarity": {
            "type": "uint32",
            "desc": "[1,100]",
            "isArray": false
        },
        "face_occlusion": {
            "type": "uint32",
            "desc": "[1,100]",
            "isArray": false
        },
        "liveness_confidence": {
            "type": "uint32",
            "desc": "[1,100]",
            "isArray": false
        },
        "face_brightness": {
            "type": "uint32",
            "desc": "[0,255]",
            "isArray": false
        },
        "face_size_min": {
            "type": "uint32",
            "desc": "",
            "isArray": false
        },
        "face_size_max": {
            "type": "uint32",
            "desc": "",
            "isArray": false
        },
        "face_score": {
            "type": "uint32",
            "desc": "[1,100] face comprehensive quality score",
            "isArray": false
        },
        "face_rotate_angle": {
            "type": "FaceRotateAngle",
            "desc": "",
            "isArray": false
        }
    },
    "DeviceConfigParam": {
        "__parentType": ["ConfigDeviceParam"],
        "mode": {
            "type": "DeviceServiceMode",
            "desc": "",
            "isArray": false
        },
        "channel_num": {
            "type": "uint32",
            "desc": "",
            "isArray": false
        },
        "channel_name": {
            "type": "string",
            "desc": "",
            "isArray": false
        },
        "protocol": {
            "type": "DeviceAccessProtocol",
            "desc": "",
            "isArray": false
        },
        "server_addr": {
            "type": "ServerAddr",
            "desc": "",
            "isArray": false
        },
        "capture_strategy": {
            "type": "DeviceCaptureStrategy",
            "desc": "",
            "isArray": false
        },
        "capture_interval": {
            "type": "uint32",
            "desc": "more than 1s for gap capture",
            "isArray": false
        },
        "capture_delay_sec": {
            "type": "uint32",
            "desc": "[1,10]s for fast capture",
            "isArray": false
        },
        "max_capture_count": {
            "type": "uint32",
            "desc": "[1,3] for leaving capture,[1,50] for gap capture",
            "isArray": false
        },
        "capture_time_period": {
            "type": "CaptureTimePeriod",
            "desc": "",
            "isArray": true
        },
        "face_quality": {
            "type": "FaceQualitySetting",
            "desc": "",
            "isArray": false
        },
        "similarity_threshold": {
            "type": "uint32",
            "desc": "[1,100]",
            "isArray": false
        },
        "target_staff_group": {
            "type": "TargetStaffGroup",
            "desc": "",
            "isArray": false
        },
        "status": {
            "type": "DeviceWorkStatus",
            "desc": "web read only",
            "isArray": false
        }
    },
    "StartUploadSnapshot": {
        "__parentType": [],
        "placeholder": {
            "type": "int32",
            "desc": "占位字段，需要赋值为1",
            "isArray": false
        }
    },
    "ProbeNetworkAdaptor": {
        "__parentType": [],
        "probe_device": {
            "type": "bool",
            "desc": "need to be set to true when the message is called",
            "isArray": false
        },
        "task_id": {
            "type": "string",
            "desc": "请求任务id，建议ms时间戳+6位随机数",
            "isArray": false
        }
    },
    "GetSystemTimeInfo": {
        "__parentType": [],
        "get_system_time": {
            "type": "bool",
            "desc": "need to be set to true when the message is called",
            "isArray": false
        },
        "task_id": {
            "type": "string",
            "desc": "请求任务id，建议ms时间戳+6位随机数",
            "isArray": false
        }
    },
    "RestoreDefaultTimeParams": {
        "__parentType": [],
        "restore_system_time_params": {
            "type": "bool",
            "desc": "need to be set to true when the message is called",
            "isArray": false
        },
        "task_id": {
            "type": "string",
            "desc": "请求任务id，建议ms时间戳+6位随机数",
            "isArray": false
        }
    },
    "GetSystemVersionInfo": {
        "__parentType": ["WebAction"],
        "get_version": {
            "type": "bool",
            "desc": "need to be set to true when the message is called",
            "isArray": false
        },
        "task_id": {
            "type": "string",
            "desc": "请求任务id，建议ms时间戳+6位随机数",
            "isArray": false
        }
    },
    "GetSystemHardwareInfo": {
        "__parentType": ["WebAction"],
        "get_hardware_info": {
            "type": "bool",
            "desc": "need to be set to true when the message is called",
            "isArray": false
        },
        "task_id": {
            "type": "string",
            "desc": "请求任务id，建议ms时间戳+6位随机数",
            "isArray": false
        }
    },
    "GetMaintainParams": {
        "__parentType": ["WebAction"],
        "get_maintain_params": {
            "type": "bool",
            "desc": "",
            "isArray": false
        },
        "task_id": {
            "type": "string",
            "desc": "请求任务id，建议ms时间戳+6位随机数",
            "isArray": false
        }
    },
    "ExportSystemLog": {
        "__parentType": ["WebAction"],
        "export_time": {
            "type": "LogExportTime",
            "desc": "",
            "isArray": false
        },
        "task_id": {
            "type": "string",
            "desc": "请求任务id，建议ms时间戳+6位随机数",
            "isArray": false
        }
    },
    "RestoreFactorySetting": {
        "__parentType": ["WebAction"],
        "retore_factory_setting": {
            "type": "bool",
            "desc": "",
            "isArray": false
        },
        "task_id": {
            "type": "string",
            "desc": "请求任务id，建议ms时间戳+6位随机数",
            "isArray": false
        }
    },
    "RestoreDefaultSetting": {
        "__parentType": ["WebAction"],
        "retore_default_setting": {
            "type": "bool",
            "desc": "need to be set to true when the message is called",
            "isArray": false
        },
        "task_id": {
            "type": "string",
            "desc": "请求任务id，建议ms时间戳+6位随机数",
            "isArray": false
        }
    },
    "RebootDevice": {
        "__parentType": ["WebAction"],
        "reboot_device": {
            "type": "bool",
            "desc": "need to be set to true when the message is called",
            "isArray": false
        },
        "task_id": {
            "type": "string",
            "desc": "请求任务id，建议ms时间戳+6位随机数",
            "isArray": false
        }
    },
    "SoftwareUpgrade": {
        "__parentType": ["WebAction"],
        "software_upgrade": {
            "type": "bool",
            "desc": "need to be set to true when the message is called",
            "isArray": false
        },
        "package_path": {
            "type": "string",
            "desc": "softwre package path",
            "isArray": false
        },
        "task_id": {
            "type": "string",
            "desc": "请求任务id，建议ms时间戳+6位随机数",
            "isArray": false
        }
    },
    "GetDataPushParams": {
        "__parentType": [],
        "get_data_push_params": {
            "type": "bool",
            "desc": "need to be set to true when the message is called",
            "isArray": false
        },
        "task_id": {
            "type": "string",
            "desc": "请求任务id，建议ms时间戳+6位随机数",
            "isArray": false
        }
    },
    "AddCapturePushTask": {
        "__parentType": [],
        "capture_push_info": {
            "type": "CapturePushInfo",
            "desc": "",
            "isArray": false
        },
        "task_id": {
            "type": "string",
            "desc": "请求任务id，建议ms时间戳+6位随机数",
            "isArray": false
        }
    },
    "EditCapturePushTask": {
        "__parentType": [],
        "capture_push_info": {
            "type": "CapturePushInfo",
            "desc": "",
            "isArray": false
        },
        "task_id": {
            "type": "string",
            "desc": "请求任务id，建议ms时间戳+6位随机数",
            "isArray": false
        }
    },
    "DeleteCapturePushTask": {
        "__parentType": [],
        "task_name": {
            "type": "string",
            "desc": "",
            "isArray": false
        },
        "task_id": {
            "type": "string",
            "desc": "请求任务id，建议ms时间戳+6位随机数",
            "isArray": false
        }
    },
    "EnableCapturePushTask": {
        "__parentType": [],
        "enable_task": {
            "type": "bool",
            "desc": "true:enable task /false:disenable task",
            "isArray": false
        },
        "task_name": {
            "type": "string",
            "desc": "",
            "isArray": false
        },
        "task_id": {
            "type": "string",
            "desc": "请求任务id，建议ms时间戳+6位随机数",
            "isArray": false
        }
    },
    "EnableVideoChannel": {
        "__parentType": [],
        "channel_id": {
            "type": "uint32",
            "desc": "",
            "isArray": false
        },
        "b_channel_enable": {
            "type": "bool",
            "desc": "",
            "isArray": false
        },
        "task_id": {
            "type": "string",
            "desc": "请求任务id，建议ms时间戳+6位随机数",
            "isArray": false
        }
    },
    "GetDeviceList": {
        "__parentType": [],
        "b_get_device_list": {
            "type": "bool",
            "desc": "need to be set to true when the message is called",
            "isArray": false
        },
        "mode": {
            "type": "DeviceServiceMode",
            "desc": "按照模式搜索",
            "isArray": false
        },
        "status": {
            "type": "DeviceWorkStatus",
            "desc": "按照工作状态搜索",
            "isArray": false
        },
        "page_size": {
            "type": "uint32",
            "desc": "page size",
            "isArray": false
        },
        "page_id": {
            "type": "uint32",
            "desc": "page infdex",
            "isArray": false
        },
        "task_id": {
            "type": "string",
            "desc": "请求任务id，建议ms时间戳+6位随机数",
            "isArray": false
        }
    },
    "GetDeviceNum": {
        "__parentType": [],
        "b_get_device_num": {
            "type": "bool",
            "desc": "need to be set to true when the message is called",
            "isArray": false
        },
        "task_id": {
            "type": "string",
            "desc": "请求任务id，建议ms时间戳+6位随机数",
            "isArray": false
        }
    },
    "GetFaceQualitySetting": {
        "__parentType": [],
        "b_get_default_quality": {
            "type": "bool",
            "desc": "true for default quality,false for current quality",
            "isArray": false
        },
        "channel_num": {
            "type": "uint32",
            "desc": "",
            "isArray": false
        },
        "require": {
            "type": "FaceQualityRequire",
            "desc": "",
            "isArray": false
        },
        "task_id": {
            "type": "string",
            "desc": "请求任务id，建议ms时间戳+6位随机数",
            "isArray": false
        }
    },
    "ProbeDevice": {
        "__parentType": [],
        "b_probe_device": {
            "type": "bool",
            "desc": "need to be set to true when the message is called",
            "isArray": false
        },
        "task_id": {
            "type": "string",
            "desc": "请求任务id，建议ms时间戳+6位随机数",
            "isArray": false
        }
    },
    "GetAllConfig": {
        "__parentType": [],
        "placeholder": {
            "type": "int32",
            "desc": "占位字段，需要赋值为1",
            "isArray": false
        }
    },
    "LoginAccount": {
        "__parentType": ["WebAction"],
        "task_id": {
            "type": "string",
            "desc": "请求任务id，建议ms时间戳+6位随机数",
            "isArray": false
        },
        "login_type": {
            "type": "LoginType",
            "desc": "登录类型",
            "isArray": false
        },
        "act_info": {
            "type": "AccountInfo",
            "desc": "登录信息，注意md5加密",
            "isArray": false
        }
    },
    "LoginStatus": {
        "__parentType": ["WebActionResult"],
        "result": {
            "type": "ActionCommonResult",
            "desc": "ErrorCode",
            "isArray": false
        },
        "task_id": {
            "type": "string",
            "desc": "请求任务id，建议ms时间戳+6位随机数",
            "isArray": false
        },
        "login_info": {
            "type": "LoginInfo",
            "desc": "登录状态反馈",
            "isArray": false
        }
    },
    "SetupAccount": {
        "__parentType": ["WebAction"],
        "task_id": {
            "type": "string",
            "desc": "请求任务id，建议ms时间戳+6位随机数",
            "isArray": false
        },
        "setup_type": {
            "type": "SetupType",
            "desc": "设置账户类型",
            "isArray": false
        },
        "user_info": {
            "type": "AccountInfo",
            "desc": "账号密码信息，注意md5加密",
            "isArray": false
        },
        "reminder_info": {
            "type": "AccountInfo",
            "desc": "密保信息，注意md5加密",
            "isArray": true
        }
    },
    "SetupAccountResult": {
        "__parentType": ["WebActionResult"],
        "result": {
            "type": "ActionCommonResult",
            "desc": "ErrorCode",
            "isArray": false
        },
        "task_id": {
            "type": "string",
            "desc": "请求任务id，建议ms时间戳+6位随机数",
            "isArray": false
        }
    },
    "AccountInfo": {
        "__parentType": ["LoginAccount", "SetupAccount"],
        "md5_key": {
            "type": "string",
            "desc": "md5加密后的账号或密保问题",
            "isArray": false
        },
        "md5_value": {
            "type": "string",
            "desc": "md5加密后的密码或密保答案",
            "isArray": false
        }
    },
    "LoginInfo": {
        "__parentType": ["LoginStatus"],
        "is_inited": {
            "type": "bool",
            "desc": "是否初始化，未初始化时需初始化（设置密码和密保）",
            "isArray": false
        },
        "is_expired": {
            "type": "bool",
            "desc": "token失效，需要重新登录",
            "isArray": false
        },
        "retry_choice_cntdown": {
            "type": "int32",
            "desc": "可重试次数倒计数",
            "isArray": false
        },
        "retry_timesec_cntdown": {
            "type": "int32",
            "desc": "可再次登录时间倒计时",
            "isArray": false
        },
        "token": {
            "type": "string",
            "desc": "当前有效token（登录成功时有效）",
            "isArray": false
        }
    }
};