export default {
  app: {
    commercial: 'Commercial Edition',
    education: 'Education Edition',
    trial: 'Trial Edition',
  },
  menu: {
    undo: 'Undo',
    redo: 'Redo',
    new: 'New',
    save: 'Save',
    saveAs: 'Save As',
    file: 'File',
    edit: 'Edit',
    view: 'View',
    open: 'Open',
    quit: 'Quit',
    delete: 'Delete',
  },
  desc: {
    mapName: 'Map Name',
    mapCatalogue: 'Map Catalogue',
    mapElement: 'Map Element',
    element: 'Element',
    property: 'Property',
    road: 'Road',
    junction: 'Junction',
    topView: 'Top View',
    perspectiveView: 'Perspective View',
    // 地图管理相关描述
    mapFile: {
      undefined: 'Undefined',
      selectAll: 'Select All',
      searchName: 'Search Name',
      mapManagement: 'Map Management',
      mapName: 'Map Name',
      fileSize: 'File Size',
      operation: 'Operation',
      open: 'Open',
      close: 'Close',
      import: 'Import',
      export: 'Export',
      delete: 'Delete',
    },
    // 通用的道路级别元素描述
    commonRoad: {
      currentRoadProperty: 'Current Road Property',
      currentSectionProperty: 'Current Section Property',
      currentLaneProperty: 'Current Lane Property',
      roadId: 'Road ID',
      sectionId: 'Section ID',
      laneId: 'Lane ID',
      roadLength: 'Road Length',
      sectionLength: 'Section Length',
      laneNumber: 'Lane Number',
      currentJunctionProperty: 'Current Junction Property',
      junctionId: 'Junction ID',
      position: 'Position',
      angle: 'Angle',
      stCoordinatePosition: 'st Coordinate Position',
      stCoordinateAngle: 'st Coordinate Angle',
      globalCoordinatePosition: 'Global Coordinate Position',
      globalCoordinateAngle: 'Global Coordinate Angle',
      angleOnPole: 'Angle on Pole',
      positionOnPole: 'Position on Pole',
      yaw: 'Yaw',
      size: 'Size',
      length: 'Length',
      width: 'Width',
      height: 'Height',
      color: 'Color',
      ratio: 'Ratio',
      time: 'Time',
    },
    // 道路编辑模式下描述名词
    editRoad: {
      linkJunctionId: 'Link Junction ID',
      currentControlPointProperty: 'Current Control Point Property',
      controlRoadId: 'Control Road ID',
      controlRoadLength: 'Control Road Length',
      roadType: 'Road Type',
      commonRoad: 'Common Road',
      ramp: 'Ramp',
      tunnel: 'Tunnel',
      tunnelLength: 'Tunnel Length',
      tunnelSCoordinate: 'Tunnel S Coordinate',
    },
    // 路口编辑模式下描述名词
    editJunction: {
      linkRoadId: 'Link Road ID',
      currentRoadHelperEndProperty: 'Current Road Helper End Property',
      belongingRoadId: 'Belonging Road ID',
    },
    // 车道宽度编辑模式下描述名词
    editLaneWidth: {
      laneWidth: 'Lane Width',
    },
    editLaneNumber: {
      addSameTypeLane: 'Add Same Type Lane',
      removeCurrentLane: 'Remove Current Lane',
    },
    editBoundary: {
      currentLaneBoundaryProperty: 'Current Lane Boundary Property',
      boundaryId: 'Boundary ID',
      type: 'Type',
      None: 'None',
      Solid: 'Single Solid Line',
      Broken: 'Single Dash Line',
      SolidSolid: 'Double Solid Line',
      BrokenBroken: 'Double Dash Line',
      SolidBroken: 'Inner Solid Outer Dash Line',
      BrokenSolid: 'Inner Dash Outer Solid Line',
    },
    editLaneAttr: {
      speedLimit: 'Speed Limit',
      laneType: 'Lane Type',
      None: 'None',
      Driving: 'Driving',
      Stop: 'Stop',
      Shoulder: 'Shoulder',
      Biking: 'Biking',
      Sidewalk: 'Sidewalk',
      Border: 'Border',
      Restricted: 'Restricted',
      Parking: 'Parking',
      Bidirectional: 'Bidirectional',
      ConnectingRamp: 'Connecting Ramp',
      Curb: 'Curb',
      Entry: 'Entry',
      Exit: 'Exit',
      Median: 'Median',
      Offramp: 'Offramp',
      Onramp: 'Onramp',
      Rail: 'Rail',
      RoadWorks: 'RoadWorks',
      Tram: 'Tram',
      // 路面附着系数相关
      friction: 'Friction',
      materialSOffset: 'Material S Offset',
    },
    editLink: {
      currentHTPointProperty: 'Current Point Property',
      currentJunctionLinkProperty: 'Current Junction Lane Link Property',
      enteringLaneProperty: 'Entering Lane Property',
      leavingLaneProperty: 'Leaving Lane Property',
      orientation: 'Orientation',
      enteringLaneDirection: 'Entering Lane Direction',
      leavingLaneDirection: 'Leaving Lane Direction',
      belongingJunctionId: 'Belonging Junction ID',
      belongingRoadId: 'Belonging Road ID',
      belongingSectionId: 'Belong Section ID',
      laneLinkId: 'Lane Link ID',
    },
    editObject: {
      pole: 'Pole',
      signalBoard: 'Signal Board',
      trafficLight: 'Traffic Light',
      roadSign: 'Road Sign',
      sensor: 'Sensor',
      other: 'Other',
      customModel: 'Custom Model',

      // 编辑模式 UI 相关翻译
      poleId: 'Pole ID',
      roadSignId: 'Road Sign ID',
      objectId: 'Object ID',
      signalBoardId: 'Signal Board ID',
      trafficLightId: 'Traffic Light ID',
      parkingSpaceId: 'Parking Space ID',
      sensorId: 'Sensor ID',
      poleName: 'Pole Name',
      roadSignName: 'Road Sign Name',
      objectName: 'Object Name',
      trafficLightName: 'Traffic Light Name',
      signalBoardName: 'Signal Board Name',
      sensorName: 'Sensor Name',
      currentPoleProperty: 'Current Pole Property',
      currentRoadSignProperty: 'Current Road Sign Property',
      currentOtherTypeObjectProperty: 'Current Other Type Object Property',
      currentTrafficLightProperty: 'Current Traffic Light Property',
      currentSignalBoardProperty: 'Current Signal Board Property',
      currentParkingSpaceProperty: 'Current Parking Space Property',
      currentSensorProperty: 'Current Sensor Property',
      currentCustomModelProperty: 'Current Custom Model Property',
      horizontalDistance: 'Horizontal Distance',
      verticalDistance: 'Vertical Distance',
      adjustToReverseOrientation: 'Adjust to Reverse Orientation',

      // 旧版地图编辑器物体对应的翻译
      verticalPole: 'Vertical Pole',
      horizontalPole: 'Horizontal Pole',
      indicatorLine: 'Indicator Line',
      prohibitionLine: 'Prohibition Line',
      otherLine: 'Other Line',
      indicatorSign: 'Indicator Sign',
      warningSign: 'Warning Sign',
      prohibitionSign: 'Prohibition Sign',
      // 新增的杆
      pillarPole3m: 'Pillar Pole 3m',
      pillarPole6m: 'Pillar Pole 6m',
      cantileverPole: 'Cantilever Pole',
      // 信号灯
      verticalOmnidirectionalLight: 'Vertical Omnidirectional Light',
      verticalStraightRoundLight: 'Vertical Straight Round Light',
      verticalLeftTurnLight: 'Vertical Left Turn Light',
      verticalStraightLight: 'Vertical Straight Light',
      verticalRightTurnLight: 'Vertical Right Turn Light',
      verticalUTurnLight: 'Vertical UTurn Light',
      verticalPedestrianLight: 'Vertical Pedestrian Light',
      horizontalOmnidirectionalLight: 'Horizontal Omnidirectional Light',
      horizontalStraightRoundLight: 'Horizontal Straight Round Light',
      horizontalLeftTurnLight: 'Horizontal Left Turn Light',
      horizontalStraightLight: 'horizontal Straight Light',
      horizontalRightTurnLight: 'Horizontal Right Turn Light',
      horizontalUTurnLight: 'Horizontal UTurn Light',
      bicycleLight: 'Bicycle Light',
      twoColorIndicatorLight: 'Two Color Indicator Light',
      // 路侧传感器
      camera: 'Camera',
      millimeterWaveRadar: 'Millimeter Wave Radar',
      lidar: 'Lidar',
      rsu: 'RSU',
      // 标志牌
      sharpCurveToLeft: 'Sharp Curve to Left',
      sharpCurveToRight: 'Sharp Curve to Right',
      tShapedIntersection: 'T-Shaped Intersection',
      crossIntersection: 'Cross Intersection',
      watchForChildren: 'Watch for Children',
      uphill: 'Uphill',
      downhill: 'Downhill',
      roadWorkAhead: 'Road Work ahead',
      roadNarrowsOnLeft: 'Road Narrows on Left',
      roadNarrowsOnRight: 'Road Narrows on Right',
      roadNarrowsOnBothSides: 'Road Narrows on Both Sides',
      unguardedRailwayCrossing: 'Unguarded Railway Crossing',
      steepMountainRoadLeft: 'Steep Mountain Road on the Left',
      steepMountainRoadRight: 'Steep Mountain Road on the Right',
      village: 'Village',
      embankmentRoadLeft: 'Embankment Road on the Left',
      embankmentRoadRight: 'Embankment Road on the Right',
      tJunctionWithDualCarriageway: 'T-Junction with a Dual Carriageway',
      ferry: 'Ferry',
      fallingRocksRight: 'Falling Rocks on the Right',
      fallingRocksLeft: 'Falling Rocks on the Left',
      reverseCurveLeft: 'Reverse Curve on the Left',
      reverseCurveRight: 'Reverse Curve on the Right',
      lowWaterCrossing: 'Low Water Crossing',
      crossroads: 'Crossroads',
      vehiclesMergingLeft: 'Vehicles Merging on the Left',
      vehiclesMergingRight: 'Vehicles Merging on the Right',
      circleRoad: 'Circle Road',
      windingRoadAhead: 'Winding Road ahead',
      longDescent: 'Long Descent',
      roughRoadAhead: 'Rough Road ahead',
      driveCarefullyInRainOrSnow: 'Drive Carefully in Rain or Snow',
      yieldToPeopleWithDisabilities: 'Yield to People with Disabilities',
      watchForWildAnimals: 'Watch for Wild Animals',
      accidentArea: 'Accident Area',
      reversibleLaneAhead: 'Reversible Lane ahead',
      driveCarefullyInAdverseWeatherConditions:
        'Drive Carefully in Adverse Weather Conditions',
      lowLyingRoadAhead: 'Low Lying Road ahead',
      bumpyRoadAhead: 'Bumpy Road ahead',
      queuesLikelyAhead: 'Queues Likely ahead',
      crossroadsWithDualCarriageway: 'Crossroads with a Dual Carriageway',
      tunnel: 'Tunnel',
      turnOnHeadlightsBeforeEnteringTunnel:
        'Turn on Headlights before Entering Tunnel',
      camelBackBridge: 'Camel-Back Bridge',
      watchForNonMotorVehicles: 'Watch for Non-Motor Vehicles',
      slipperySurface: 'Slippery Surface',
      trafficLightsAhead: 'Traffic Lights ahead',
      detourRight: 'Detour Right',
      narrowBridge: 'Narrow Bridge',
      keepDistance: 'Keep Distance',
      roadsMerge: 'Roads Merge',
      bewareOfCrosswind: 'Beware of Crosswind',
      icyRoads: 'Icy Roads',
      driveWithCaution: 'Drive with Caution',
      driveCarefullyInFoggyWeather: 'Drive Carefully in Foggy Weather',
      watchForLivestock: 'Watch for Livestock',
      detourLeft: 'Detour Left',
      detourAheadLeftOrRight: 'Detour ahead Left or Right',
      twoWayTraffic: 'Two-Way Traffic',
      watchForPedestrians: 'Watch for Pedestrians',
      // 禁令标志
      prohibitorySign: 'Prohibitory Sign',
      noStraightThru: 'No Straight Thru',
      noMotorVehicles: 'No Motor Vehicles',
      speedLimit: 'Speed Limit',
      stop: 'STOP',
      heightLimit: 'Height Limit',
      m: 'm',
      noEntryForVehicularTraffic: 'No Entry for Vehicular Traffic',
      noMotorcycles: 'No Motorcycles',
      weightLimit: 'Weight Limit',
      t: 't',
      noHonking: 'No Honking',
      noTrucks: 'No Trucks',
      noStopping: 'No Stopping',
      axleWeightLimit: 'Axle Weight Limit',
      slowDown: 'Show Down',
      noLeftTurn: 'No Left Turn',
      noRightTurn: 'No Right Turn',
      vehiclesCarryingHazardousMaterialsProhibited:
        'Vehicles Carrying Hazardous Materials Prohibited',
      noTractors: 'No Tractors',
      noMotorTricycles: 'No Motor Tricycles',
      noMinibuses: 'No Minibuses',
      noStraightThruOrLeftTurn: 'No Straight Thru or Left Turn',
      noHandcartsOrTricycles: 'No Handcarts or Tricycles',
      noHandcartsOrFreightTricycles: 'No Handcarts or Freight Tricycles',
      noPassengerTricycles: 'No Passenger Tricycles',
      noTurns: 'No Turns',
      noStraightThruOrRightTurn: 'No Straight Thru or Right Turn',
      noEntry: 'No Entry',
      giveWayToOncomingVehicles: 'Give Way to Oncoming Vehicles',
      noRightTurnForMinibuses: 'No Right Turn for Minibuses',
      noLeftTurnForMinibuses: 'No Left Turn for Minibuses',
      noRightTurnForTrucks: 'No Right Turn for Trucks',
      noLeftTurnForTrucks: 'No Left Turn for Trucks',
      doNotCycleDownhill: 'Do Not Cycle Downhill',
      doNotCycleUphill: 'Do Not Cycle Uphill',
      endOfNoOvertakingZone: 'End of No Overtaking Zone',
      noOvertaking: 'No Overtaking',
      noAnimalDrawnCarts: 'No Animal-Drawn Carts',
      noLargeBuses: 'No Large Buses',
      noElectricTricycles: 'No Electric Tricycles',
      noEntryForNonMotorVehicles: 'No Entry for Non-Motor Vehicles',
      noTrailers: 'No Trailers',
      noPedestrians: 'No Pedestrians',
      noFreightVehiclesAndTractors: 'No Freight Vehicles and Tractors',
      widthLimit: 'Width Limit',
      customs: 'Customs',
      stopForInspection: 'Stop for Inspection',
      noParking: 'No Parking',
      endOfSpeedLimit: 'End of Speed Limit',
      noUTurn: 'No U-Turn',
      // 指示标志
      goStraight: 'Go Straight',
      minimumSpeed: 'Minimum Speed',
      keepRight: 'Keep Right',
      keepLeft: 'Keep Left',
      pedestrianCrossing: 'Pedestrian Crossing',
      turnRight: 'Turn Right',
      turnLeft: 'Turn Left',
      roundabout: 'Roundabout',
      straightOrLeftTurn: 'Straight or Left Turn',
      straightOrRightTurn: 'Straight or Right Turn',
      walk: 'Walk',
      nonMotorVehiclesOnly: 'Non-Motor Vehicles Only',
      motorVehiclesOnly: 'Motor Vehicles Only',
      proceedStraightAndTurnRightViaRampOfInterchange:
        'Proceed Straight and Turn Right via Ramp of Interchange',
      proceedStraightAndTurnLeftViaRampOfCloverleafInterchange:
        'Proceed Straight and Turn Left via Ramp of Cloverleaf Interchange',
      honk: 'Honk',
      turnLeftOrRight: 'Turn Left or Right',
      parkingSpace: 'Parking Space',
      // 路面标线
      leftTurningVehicleWaitingArea: 'Left-Turning Vehicle Waiting Area',
      crosswalk: 'Crosswalk',
      pedestrianCrosswalkWarningSigns: 'Pedestrian Crosswalk Warning Signs',
      whiteBrokenLineVehicleDistanceConfirmation:
        'White Broken Line Vehicle Distance Confirmation',
      whiteSemiCircleLineVehicleDistanceConfirmation:
        'White Semicircle Line Vehicle Distance Confirmation',
      uTurn: 'U-Turn',
      turnOrStraight: 'Turn or Straight',
      straightOrUTurn: 'Straight or U-Turn',
      leftTurnOrUTurn: 'Left Turn or U-Turn',
      turnLeftOrRightOnly: 'Turn Left or Right Only',
      leftBendAheadOrNeedsToMergeLeft: 'Left Bend ahead or Needs to Merge Left',
      rightBendAheadOrNeedsToMergeRight:
        'Right Bend ahead or Needs to Merge Right',
      pavementMarking: 'Pavement Marking',
      nonMotorVehiclesOnlyMarkings: 'Non-Motor Vehicles Only',
      disabledParkingSpots: 'Disabled Parking Spots',
      guideLaneLine: 'Guide Lane Line',
      variableDirectionLaneLine: 'Variable Direction Lane Line',
      crosswalkWithLeftAndRightSide: 'Crosswalk width Left and Right Side',
      intersectionGuideLine: 'Intersection Guide Line',
      warningLine: 'Warning Line',
      longitudinalDecelerationMarking: 'Longitudinal Deceleration Marking',
      lateralDecelerationMarking: 'Lateral Deceleration Marking',
      stopLine: 'Stop',
      stopAndGiveWay: 'Stop to Give Way',
      slowDownAndGiveWay: 'Slow Down to Give Way',
      circularCenterCircle: 'Circular Center Circle',
      diamondCenterCircle: 'Diamond Center Circle',
      meshLine: 'Mesh Line',
      busLane: 'Bus Lane',
      smallCarLane: 'Small Car Lane',
      largeCarLane: 'Large Car Lane',
      turningForbidden: 'Turning Forbidden',
      uTurningForbidden: 'U-Turning Forbidden',
      nonMotorVehicle: 'Non Motor Vehicle',
      parkingSpotMarking: 'Parking Space',
      limitedTimeParkingSpace: 'Limited Time Parking Space',
      parking6m: '6 Meters Parking Space',
      parking5m: '5 Meters Parking Space',
      parking45deg: '45 Degree Parking Space',
      parking60deg: '60 Degree Parking Space',
      // 其他类型物体
      // 路面污损
      roadDamageOrDefect: 'Road Damage or Defect',
      pothole: 'Pothole',
      patch: 'Patch',
      crack: 'Crack',
      asphaltLine: 'Asphalt Line',
      tireMarks: 'Tire Marks',
      stagnantWater: 'Stagnant Water',
      bump: 'Bump',
      // 交通管理
      trafficManagement: 'Traffic Management',
      manholeCover: 'Manhole Cover',
      decelerationZone: 'Deceleration Zone',
      reflectiveRoadSign: 'Reflective Road Sign',
      parkingLever: 'Parking Lever',
      parkingPile: 'Parking Pile',
      groundLock: 'Ground Lock',
      plasticCarStopper: 'Plastic Car Stopper',
      uShapedCarStopper: 'U-Shaped Car Stopper',
      supportTypeCarStopper: 'Support Type Car Stopper',
      chargingStation: 'Charging Station',
      lamp: 'Lamp',
      trafficBarrier: 'Traffic Barrier',
      roadCurb: 'Road Curb',
      trafficCone: 'Traffic Cone',
      trafficHorse: 'Traffic Horse',
      garbageCan: 'Garbage Can',
      obstacle: 'Obstacle',
      // 植被
      vegetation: 'Vegetation',
      tree: 'Tree',
      shrub: 'Shrub',
      grass: 'Grass',
      // 建筑
      structure: 'Structure',
      residence: 'Residence',
      busStop: 'Bus Stop',
      LShapedOfficeBuilding: 'L-Shaped Office Building',
      // 天桥
      bridge: 'Pedestrian Bridge',
      straddlePedestrianBridge: 'Straddle Pedestrian Bridge',
      span: 'Span',
    },
    editSignalControl: {
      lightType: 'Light Type',
      signalControl: 'Signal Control',
      belongingJunction: 'Belonging Junction',
      controlRoad: 'Control Road',
    },
    editParkingSpace: {
      parkingSpace: 'Parking Space',
      length: 'Parking Space Length',
      width: 'Parking Space Width',
      lineWidth: 'Parking Line Width',
      margin: 'Parking Space Distance',
      innerAngle: 'Parking Space Inner Angle',
      number: 'Parking Space Number',
    },
    editCircleRoad: {
      arcRadius: 'Arc Radius',
      arcAngle: 'Arc Angle',
    },
    editCrg: {
      roadSurface: 'Road Surface',
      bindOpenCRG: 'Bind OpenCRG',
      addData: 'Add Data',
      roadSurfaceDataFile: 'Road Surface Data File',
      version: 'Version',
      operation: 'Operation',
      orientation: 'Orientation',
      same: 'Same',
      opposite: 'Opposite',
      mode: 'Mode',
      attached: 'Relative Attached',
      attached0: 'Absolute Attached',
      genuine: 'Genuine',
      global: 'Global',
      purpose: 'Purpose',
      elevation: 'Elevation',
      friction: 'Friction',
      sOffset: 'S Offset',
      tOffset: 'T Offset',
      zOffset: 'Z Offset',
      zScale: 'Z Scale',
      hOffset: 'Heading Offset',
      crgFile: 'CRG File',
      allData: 'All Data',
      bindRoadSurfaceData: 'Road Surface Data',
      bindFileVersion: 'File Version',
      noRoadSurfaceDataAssociated: 'No Road Surface Data Associated',
      noFileVersionAssociated: 'No File Version Associated',
    },
    editElevation: {
      height: 'Height',
      location: 'Location',
      elevationPropertyAdjustment: 'Elevation Property Adjustment',
    },
    uploadModel: {
      modelName: 'Model Name',
      uploadFile: 'Upload File',
      thumbnail: 'Thumbnail',
      // 上传自定义模型
      importModel: 'Import Model',
      clickToUploadOrDropFileHere: 'Drop File Here or Click to Upload',
      clickToUpload: 'Click To Upload',
      dropFileHere: 'Drop File Here',
      uploadFileComponentTips:
        'Support uploading .fbx/.zip format, the size dose not exceed 5 Mb.',
      modelPreview: 'Preview Model',
      failedToUploadCustomModelFile: 'Failed to Upload Custom Model File',
      fileSizeExceed: 'File Size Exceed',
      fileFormatNotMatch: 'File Format Does Not Match',
      thumbnailComponentTips:
        'Support uploading .png format, the size does not exceed 300 Kb.',
      modelParameters: 'Model Parameters',
      originCoordinates: 'Origin Coordinates',
      sizeParameters: 'Size Parameters',
      length: 'Length',
      width: 'Width',
      height: 'Height',
      modelNameCannotBeEmpty: 'Model name cannot be empty.',
      modelNameSupportFormat:
        'Model name only supports Chinese, English letters and numbers.',
      modelNameSupportLength: 'Model name cannot exceed 20 characters.',
      modelNameDuplicated: 'Model name is duplicated.',
      pleaseUploadValidatedModelFile: 'Please upload validated model file.',
      saveCustomModelConfigSuccessfully:
        'Save Custom Model Config Successfully',
      failedToSaveCustomModelConfig: 'Failed to Save Custom Model Config',
      confirmToModifyCustomModel: 'Confirm to modify custom model?',
      confirmToModifyCustomModelInUsed:
        'The model has been used in the map. if you modify the custom model configuration, the model will be modify. confirm to modify custom model?',
      confirmToDeleteCustomModel: 'Confirm to delete custom model?',
      confirmToDeleteCustomModelInUsed:
        'The model has been used in the map. if you delete the custom model configuration, the model will be delete. confirm to delete custom model?',
      failedToGetCustomModelList: 'Failed to Get Custom Model List',
      deleteCustomModelSuccessfully: 'Delete Custom Model Successfully',
      failedToDeleteCustomModel: 'Failed to Delete Custom Model',
      missingTextureFile: 'Some texture files not found',
    },
    tips: {
      tips: 'Tips',
      confirm: 'OK',
      cancel: 'Cancel',
      keepBoth: 'Keep Both',
      applyAll: 'Apply All',
      saving: 'Saving',
      loading: 'Loading',
      exporting: 'Exporting',
      importing: 'Importing',
      deleting: 'Deleting',
      file: 'File',
      noMapElementsToSave: 'No Map Elements to Save',
      theMapIsNotUpdatedNoNeedToSave:
        'The map is not updated, no need to save.',
      noRoadElementsInTheMapCannotBeSaved:
        'No road elements in the map and cannot be saved.',
      saveMapSuccessfully: 'Saved the Map Successfully',
      AutosaveTheMapSuccessfully: 'Autosave the Map Successfully',
      failedToSaveMap: 'Failed to Save Map',
      failedToAutosaveMap: 'Failed to Autosave Map',
      openMapSuccessfully: 'Open the Map Successfully',
      failedToOpenMap: 'Failed to Open Map',
      exportMapSuccessfully: 'Export Map Successfully',
      failedToExportMap: 'Failed to Export Map',
      importMapSuccessfully: 'Import Map Successfully',
      failedToImportMap: 'Failed to Import Map',
      deleteMapSuccessfully: 'Delete Map Successfully',
      failedToDeleteMap: 'Failed to Delete Map',
      mapNameIsEmpty: 'Map Name is Empty',
      mapNameIsInvalidated: 'Map Name is Invalidated',
      mapNameIsTooLong: 'Map Name is Too Long',
      aMapFileWithTheSameNameExists: 'A Map File with the Same Name Exists',
      mapCatalogueCannotBeEmpty: 'The Map Catalogue cannot be Empty',
      pleaseSelectAMapCatalogue: 'Please Select a Map Catalogue',
      theMap: 'The Map',
      isExistingMapConfirmToReplaceIt:
        'is an existing map, confirm to replace it',
      isExistingPresetMapConfirmToKeepBoth:
        'is an existing preset map, confirm to keep both',
      notSupportedMovePoleAcrossTheRoad:
        'Moving pole across road is not supported temporarily',
      notSupportedMoveRoadSignAcrossTheRoad:
        'Moving road sign across road is not supported temporarily',
      notSupportedMoveOtherTypeObjectAcrossTheRoad:
        'Moving other object across road is not supported temporarily',
      notSupportedMoveCustomModelAcrossTheRoad:
        'Moving custom model across road is not supported temporarily',
      notSupportedMoveParkingSpaceAcrossTheRoad:
        'Moving parking space across road is not supported temporarily',
      addingJunctionLinkInvalid: 'The adding lane link is invalid',
      deleteLaneLinkConfirmInfo:
        'Deleting this lane link will lead to the change of junction structure, confirmed to delete',
      notSupportedDeleteCurrentOpenedMapFile:
        'Deleting currently opened map file is not supported',
      cannotSavePresetMapFileDirectly:
        'Saving preset map file is not supported',
      cannotToggleToPerspectiveViewInEditRoadMode:
        'Toggle to perspective view in edit road mode is not supported',
    },
  },
  actions: {
    tips: {
      mapNotSaveQuitWillLose:
        'Current map is not saved, continuing will lose edited information',
      select: 'Select',
      notSupportedDeleteRoadInObjectEditingMode:
        'Deleting road in object editing mode is not supported temporarily',
      notSupportedDeleteJunctionInObjectEditingMode:
        'Deleting junction in object editing mode is not supported temporarily',
      notSupportedDeleteRoadInSignalControlEditingMode:
        'Deleting road in signal control editing mode is not supported temporarily',
      notSupportedDeleteJunctionInSignalControlEditingMode:
        'Deleting junction in signal control editing mode is not supported temporarily',
      notSupportedDeleteOnlyOneForwardLaneInSection:
        'Deleting the only one forward lane in section is not supported',
      notSupportedDeleteOnlyOneReverseLaneInSection:
        'Deleting the only one reverse lane in section is not supported',
      exceedUndoLimit: 'Undo failed: Out of the range of undo records limit',
    },
    mapFile: {
      pleaseEnterMapName: 'Please Enter the Map Name',
    },
    road: {
      remove: 'Remove Road',
      move: 'Move Road',
      updateTunnelProperty: 'Update Tunnel Property',
    },
    controlPoint: {
      add: 'Add Road Control Point',
      remove: 'Remove Road Control Point',
      move: 'Move Road Control Point',
      updateHeight: 'Update Road Control Point Height',
      adjacentIntervalCantExceedLimit: 'The interval between adjacent control points cannot exceed {interval} meters.',
    },
    junction: {
      remove: 'Remove One Junction',
    },
    junctionLink: {
      add: 'Add One Lane Link',
      remove: 'Remove One Lane Link',
    },
    linkRoad: {
      connect: 'Connect Road to Junction',
      disconnect: 'Disconnect Road from Junction',
    },
    lane: {
      add: 'Add One Lane',
      remove: 'Remove One Lane',
      modifyWidth: 'Modify Lane Width',
      modifyLaneSpeedLimit: 'Modify Lane Speed Limit',
      modifyLaneType: 'Modify Lane Type',
      modifyLaneProperty: 'Modify Lane Property',
    },
    boundary: {
      modifyLaneBoundaryStyle: 'Modify Lane Boundary Style',
    },
    object: {
      // 杆
      addPoleModel: 'Add Pole Model',
      removePoleModel: 'Remove Pole Model',
      movePolePosition: 'Move Pole Position',
      rotatePoleAngle: 'Rotate Pole Angle',
      // 路面标识
      addRoadSignModel: 'Add Road Sign Model',
      removeRoadSignModel: 'Remove Road Sign Model',
      moveRoadSignPosition: 'Move Road Sign Position',
      rotateRoadSignAngle: 'Rotate Road Sign Angle',
      updateRoadSignSize: 'Update Road Sign Size',
      // 标志牌
      addSignalBoardModel: 'Add Signal Board Model',
      removeSignalBoardModel: 'Remove Signal Board Model',
      moveSignalBoardPosition: 'Move Signal Board Position',
      rotateSignalBoardAngle: 'Rotate Signal Board Angle',
      // 信号灯
      addTrafficLightModel: 'Add Traffic Light Model',
      removeTrafficLightModel: 'Remove Traffic Light Model',
      moveTrafficLightPosition: 'Move Traffic Light Position',
      rotateTrafficLightAngle: 'Rotate Traffic Light Angle',
      // 其他
      addOtherTypeModel: 'Add Other Type Model',
      removeOtherTypeModel: 'Remove Other Type Model',
      // 其他模型统称为 object
      moveObjectPosition: 'Move Object Position',
      rotateObjectAngle: 'Rotate Object Angle',
      updateObjectSize: 'Update Object Size',
      // 停车位
      addParkingSpace: 'Add Parking Space',
      removeParkingSpace: 'Remove Parking Space',
      moveParkingSpace: 'Move Parking Space',
      rotateParkingSpace: 'Rotate Parking Space',
      copyParkingSpace: 'Copy Parking Space',
      // 其余停车位相关的属性
      updateParkingSpaceProperty: 'Update Parking Space Property',
      // 传感器
      addSensorModel: 'Add Sensor Model',
      removeSensorModel: 'Remove Sensor Model',
      moveSensorPosition: 'Move Sensor Position',
      rotateSensorAngle: 'Rotate Sensor Angle',
      updateSensorDeviceParameterConfiguration:
        'Update Sensor Device Parameter Configuration',
      // 横杆上物体调整朝向
      toggleOrientation: 'Toggle Orientation',
      // 导入自定义模型
      importModel: 'Import Model',
      addCustomModel: 'Add Custom Model',
      removeCustomModel: 'Remove Custom Model',
      moveCustomModel: 'Move Custom Model Position',
      rotateCustomModel: 'Rotate Custom Model Angle',
      updateCustomModelSize: 'Update Custom Model Size',
    },
    elevation: {
      clickToSelectTheRoad: 'Click to select the road',
      updateElevationControlPointHeight:
        'Update Elevation Control Point Height',
      addElevationControlPoint: 'Add Elevation Control Point',
      removeElevationControlPoint: 'Remove Elevation Control Point',
    },
    signalControl: {
      updateTrafficLightType: 'Update Traffic Light Type',
      updateTrafficLightBelongingJunction:
        'Update Traffic Light Belonging Junction',
      updateTrafficLightControlRoad: 'Update Traffic Light Control Road',
    },
    circleRoad: {
      createArcRoads: 'Create Arc Roads',
      updateArcRoadAngle: 'Update Arc Road Angle',
    },
    crg: {
      addCrg: 'Add CRG',
      updateCrg: 'Update CRG',
      removeCrg: 'Remove CRG ',
      pleaseSelectCrgFile: 'Please Select CRG File',
      cannotBindDuplicateCrgFile: 'Cannot bind duplicate CRG file',
    },
    file: {
      load: 'Load Map File',
      loadLocalTestMap: 'Load Local Map',
      selectAMapToImport: 'Please select a map to import',
      selectADirectoryToExportTheMap:
        'Please select a directory to export the map',
      confirmToDeleteMap:
        'Are you sure to delete the currently selected map? (Once deleted, it will not be restored)',
    },
    toggleModeTo: 'Toggle Mode to',
  },
  plugins: {
    editRoad: 'Edit Road',
    editJunction: 'Edit Junction',
    editLink: 'Edit Link',
    editLaneNumber: 'Edit Lane Number',
    editLaneWidth: 'Edit Lane Width',
    editLaneAttr: 'Edit Lane Attribute',
    editSection: 'Edit Section',
    editObject: 'Edit Object',
    editBoundary: 'Edit Lane Boundary',
    editElevation: 'Edit Elevation',
    editSignalControl: 'Edit Signal Control',
    editCircleRoad: 'Edit Circle Road',
    editCrg: 'Edit CRG',
    // 原有地图编辑器中的命名
    curveRoad: 'Curve Road',
    junction: 'Junction',
    addObject: 'Add Object',
    lane: 'Lane',
    laneWidth: 'Lane Width',
    addLane: 'Add Lane',
    laneLine: 'Lane Boundary', // 对应车道边界线，只不过称呼不一样
    link: 'Link',
    section: 'Section',
    elevation: 'Elevation',
    signalControl: 'Signal Control',
    circleRoad: 'Circle Road',
    roadSurface: 'Road Surface',
  },
}
