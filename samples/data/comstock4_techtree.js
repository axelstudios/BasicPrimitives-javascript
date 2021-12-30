var famdata = [

/*   { id: 1, parents: [], description: "", title: "Generated buildstock.csv columns", itemTitleColor: "white" },
  { id: 2, parents: [], title: "Run Measures", itemTitleColor: "white" },
  { id: 0, parents: [], title: "Sample TSV files", itemTitleColor: "white" }, */

  //TSVS
  { id: 2, parents: [], title: "unknown", itemTitleColor: "#ddd", groupTitle: "tsv" },
  { id: 0, parents: [], title: "simulation_year", itemTitleColor: "#ddd", groupTitle: "tsv"},
  { id: 3, parents: [], title: "climate_zone", itemTitleColor: "#ddd", groupTitle: "tsv" },
  { id: 1, parents: [], title: "rotation", itemTitleColor: "#ddd", groupTitle: "tsv"},


  { id: 4, parents: [3], title: "county_id", itemTitleColor: "#ddd", groupTitle: "tsv"},

  { id: 5, parents: [4], title: "building_type", itemTitleColor: "#ddd", groupTitle: "tsv"},
  { id: 6, parents: [4], title: "state_id", itemTitleColor: "#ddd", groupTitle: "tsv"},

  { id: 7, parents: [5], title: "hvac_tst_htg_delta_f", itemTitleColor: "#ddd", groupTitle: "tsv"},
  { id: 8, parents: [5], title: "hvac_tst_clg_delta_f", itemTitleColor: "#ddd", groupTitle: "tsv", },

  { id: 9, parents: [5], title: "plugload_sch_base_peak_ratio_type", itemTitleColor: "#ddd", groupTitle: "tsv"},
  { id: 170, parents: [9,5], title: "plugload_sch_weekday_base_peak_ratio", itemTitleColor: "#ddd",  groupTitle: "tsv"},
  { id: 171, parents: [9,5], title: "plugload_sch_weekend_base_peak_ratio", itemTitleColor: "#ddd",  groupTitle: "tsv"},

  { id: 10, parents: [5], title: "ltg_sch_base_peak_ratio_type", itemTitleColor: "#ddd", groupTitle: "tsv"},
  { id: 172, parents: [10,5], title: "ltg_sch_weekday_base_peak_ratio", itemTitleColor: "#ddd", groupTitle: "tsv"},
  { id: 173, parents: [10,5], title: "ltg_sch_weekend_base_peak_ratio", itemTitleColor: "#ddd", groupTitle: "tsv"},


  { id: 11, parents: [4,5], title: "number_stories", itemTitleColor: "#ddd", groupTitle: "tsv"},

  { id: 12, parents: [4,5], title: "year_built", itemTitleColor: "#ddd", groupTitle: "tsv"},

  { id: 174, parents: [12], title: "year_bin_of_original_building_construction", itemTitleColor: "#ddd",  groupTitle: "tsv"},

  { id: 175, parents: [12], title: "year_bin_of_last_exterior_lighting_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv"},
  { id: 176, parents: [12], title: "year_bin_of_last_hvac_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv"},
  { id: 177, parents: [12], title: "year_bin_of_last_interior_equipment_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv"},
  { id: 178, parents: [12], title: "year_bin_of_last_interior_lighting_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv"},
  { id: 179, parents: [12], title: "year_bin_of_last_roof_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv"},
  { id: 180, parents: [12], title: "year_bin_of_last_service_water_heating_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv"},
  { id: 181, parents: [12], title: "year_bin_of_last_walls_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv"},
  { id: 182, parents: [12], title: "year_bin_of_last_windows_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv"},

  { id: 13, parents: [3,5], title: "rentable_area", itemTitleColor: "#ddd", groupTitle: "tsv"},

  
  { id: 15, parents: [5,23], title: "hvac_system_type", itemTitleColor: "#ddd", groupTitle: "tsv"},
  { id: 16, parents: [5], title: "service_water_heating_fuel", itemTitleColor: "#ddd", groupTitle: "tsv",},

  { id: 17, parents: [5], title: "weekday_start_time", itemTitleColor: "#ddd", groupTitle: "tsv"},
  { id: 18, parents: [17], title: "weekday_duration", itemTitleColor: "#ddd", groupTitle: "tsv"},
  { id: 19, parents: [5], title: "weekend_start_time", itemTitleColor: "#ddd", groupTitle: "tsv"},
  { id: 20, parents: [19], title: "weekend_duration", itemTitleColor: "#ddd", groupTitle: "tsv"},
  { id: 21, parents: [5], title: "hvac_tst_htg_sp_f", itemTitleColor: "#ddd", groupTitle: "tsv"},
  { id: 22, parents: [5], title: "hvac_tst_clg_sp_f", itemTitleColor: "#ddd", groupTitle: "tsv"},
  { id: 25, parents: [15], title: "hvac_night_variability", itemTitleColor: "#ddd", groupTitle: "tsv"},
  
  { id: 23, parents: [6], title: "region", itemTitleColor: "#ddd", groupTitle: "tsv"},

  { id: 156, parents: [6], title: "energy_code_compliance_during_original_building_construction", itemTitleColor: "#ddd", groupTitle: "tsv"},

  { id: 157, parents: [6], title: "energy_code_compliance_exterior_lighting", itemTitleColor: "#ddd", groupTitle: "tsv"},
 { id: 158, parents: [6], title: "energy_code_compliance_hvac", itemTitleColor: "#ddd", groupTitle: "tsv"},
 { id: 159, parents: [6], title: "energy_code_compliance_interior_equipment", itemTitleColor: "#ddd", groupTitle: "tsv"},
 { id: 160, parents: [6], title: "energy_code_compliance_interior_lighting", itemTitleColor: "#ddd", groupTitle: "tsv"},
 { id: 161, parents: [6], title: "energy_code_compliance_roof", itemTitleColor: "#ddd", groupTitle: "tsv"},
 { id: 162, parents: [6], title: "energy_code_compliance_service_water_heating", itemTitleColor: "#ddd", groupTitle: "tsv"},
 { id: 163, parents: [6], title: "energy_code_compliance_walls", itemTitleColor: "#ddd", groupTitle: "tsv"},
 { id: 164, parents: [6], title: "energy_code_compliance_windows", itemTitleColor: "#ddd", groupTitle: "tsv"},

  { id: 152, parents: [3], title: "building_subtype", itemTitleColor: "#ddd", groupTitle: "tsv", isVisible: true},
  { id: 153, parents: [3], title: "building_shape", itemTitleColor: "#ddd", groupTitle: "tsv", isVisible: true},
  { id: 154, parents: [153], title: "aspect_ratio", itemTitleColor: "#ddd", groupTitle: "tsv"},
  


 { id: 190, parents: [174], title: "energy_code_in_force_during_original_building_construction", itemTitleColor: "#ddd", groupTitle: "tsv"},

 { id: 191, parents: [175,6], title: "energy_code_in_force_during_last_exterior_lighting_replacement", itemTitleColor: "#ddd", groupTitle: "tsv"},
 { id: 192, parents: [176,6], title: "energy_code_in_force_during_last_hvac_replacement", itemTitleColor: "#ddd", groupTitle: "tsv"},
 { id: 193, parents: [177,6], title: "energy_code_in_force_during_last_interior_equipment_replacement", itemTitleColor: "#ddd", groupTitle: "tsv"},
 { id: 194, parents: [178,6], title: "energy_code_in_force_during_last_interior_lighting_replacement", itemTitleColor: "#ddd", groupTitle: "tsv"},
 { id: 195, parents: [179,6], title: "energy_code_in_force_during_last_roof_replacement", itemTitleColor: "#ddd", groupTitle: "tsv"},
 { id: 196, parents: [180,6], title: "energy_code_in_force_during_last_service_water_heating_replacement", itemTitleColor: "#ddd", groupTitle: "tsv"},
 { id: 197, parents: [181,6], title: "energy_code_in_force_during_last_walls_replacement", itemTitleColor: "#ddd", groupTitle: "tsv"},
 { id: 198, parents: [182,6], title: "energy_code_in_force_during_last_windows_replacement", itemTitleColor: "#ddd", groupTitle: "tsv"},


 { id: 200, parents: [190,156], title: "energy_code_followed_during_original_building_construction", itemTitleColor: "#ddd", groupTitle: "tsv"},

 { id: 202, parents: [191,157], title: "energy_code_followed_during_last_exterior_lighting_replacement", itemTitleColor: "#ddd", groupTitle: "tsv"},
 { id: 203, parents: [192,158], title: "energy_code_followed_during_last_hvac_replacement", itemTitleColor: "#ddd", groupTitle: "tsv"},
 { id: 204, parents: [193,159], title: "energy_code_followed_during_last_interior_equipment_replacement", itemTitleColor: "#ddd", groupTitle: "tsv"},
 { id: 205, parents: [194,160], title: "energy_code_followed_during_last_interior_lighting_replacement", itemTitleColor: "#ddd", groupTitle: "tsv"},
 { id: 206, parents: [195,161], title: "energy_code_followed_during_last_roof_replacement", itemTitleColor: "#ddd", groupTitle: "tsv"},
 { id: 207, parents: [196,162], title: "energy_code_followed_during_last_service_water_heating_replacement", itemTitleColor: "#ddd", groupTitle: "tsv"},
 { id: 208, parents: [197,163], title: "energy_code_followed_during_last_walls_replacement", itemTitleColor: "#ddd", groupTitle: "tsv"},
 { id: 209, parents: [198,164], title: "energy_code_followed_during_last_windows_replacement", itemTitleColor: "#ddd", groupTitle: "tsv"},

 { id: 201, parents: [174,5,13], title: "window_wall_ratio", itemTitleColor: "#ddd", groupTitle: "tsv"},

 //   bldg stock
 
  { id: 27, parents: [172], title: "ltg_sch_weekday_base_peak_ratio", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", position: 2 },
  { id: 28, parents: [173], title: "ltg_sch_weekend_base_peak_ratio", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv"},
  { id: 120, parents: [10], title: "ltg_sch_base_peak_ratio_type", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv"},

 { id: 24, parents: [156], title: "energy_code_compliance_during_original_building_construction", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv"},
 { id: 110, parents: [157], title: "energy_code_compliance_exterior_lighting", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv"},
 { id: 111, parents: [158], title: "energy_code_compliance_hvac", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv"},
 { id: 112, parents: [159], title: "energy_code_compliance_interior_equipment", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv"},
 { id: 113, parents: [160], title: "energy_code_compliance_interior_lighting", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv"},
 { id: 114, parents: [161], title: "energy_code_compliance_roof", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv"},
 { id: 115, parents: [162], title: "energy_code_compliance_service_water_heating", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv"},
 { id: 116, parents: [163], title: "energy_code_compliance_walls", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv"},
 { id: 117, parents: [164], title: "energy_code_compliance_windows", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv"},


 { id: 130, parents: [200], title: "energy_code_followed_during_original_building_construction", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv"},


 { id: 32, parents: [60, 24], title: "energy_code_in_force_during_original_building_construction", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv"},

 { id: 140, parents: [52,110,175], title: "energy_code_in_force_during_last_exterior_lighting_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv"},
 { id: 141, parents: [53,111,176], title: "energy_code_in_force_during_last_hvac_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv"},
 { id: 142, parents: [54,112,177], title: "energy_code_in_force_during_last_interior_equipment_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv"},
 { id: 143, parents: [55,113,178], title: "energy_code_in_force_during_last_interior_lighting_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv"},
 { id: 144, parents: [56,114,179], title: "energy_code_in_force_during_last_roof_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv"},
 { id: 145, parents: [57,115,180], title: "energy_code_in_force_during_last_service_water_heating_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv"},
 { id: 146, parents: [58,116,181], title: "energy_code_in_force_during_last_walls_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv"},
 { id: 147, parents: [59,117,182], title: "energy_code_in_force_during_last_windows_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv"},


 { id: 33, parents: [202], title: "energy_code_followed_during_last_exterior_lighting_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv"},
 { id: 90, parents: [203], title: "energy_code_followed_during_last_hvac_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv"},
 { id: 91, parents: [204], title: "energy_code_followed_during_last_interior_equipment_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv"},
 { id: 92, parents: [205], title: "energy_code_followed_during_last_interior_lighting_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv"},
 { id: 93, parents: [206], title: "energy_code_followed_during_last_roof_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv"},
 { id: 94, parents: [207], title: "energy_code_followed_during_last_service_water_heating_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv"},
 { id: 95, parents: [208], title: "energy_code_followed_during_last_walls_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv"},
 { id: 96, parents: [209], title: "energy_code_followed_during_last_windows_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv"},

 { id: 83, parents: [154], title: "aspect_ratio", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv"},
 { id: 84, parents: [153], title: "building_shape", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv",  placementType: primitives.AdviserPlacementType.Right},
 { id: 85, parents: [5], title: "building_type", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv"},
 { id: 88, parents: [152], title: "building_subtype", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv"},
 { id: 86, parents: [3], title: "climate_zone", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv"},
 { id: 87, parents: [4], title: "county_id", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv"},

 { id: 36, parents: [11], title: "number_stories", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv"},
 { id: 36, parents: [2], title: "ownership_status", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv"},
 { id: 37, parents: [2], title: "party_responsible_for_operation", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv"},

 { id: 38, parents: [9], title: "plugload_sch_base_peak_ratio_type", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv"},
 { id: 39, parents: [170], title: "plugload_sch_weekday_base_peak_ratio", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv"},
 { id: 40, parents: [171], title: "plugload_sch_weekend_base_peak_ratio", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv"},


 { id: 127, parents: [121], title: "heating_fuel", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv"},


 { id: 121, parents: [15], title: "hvac_system_type", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv"},
 { id: 122, parents: [8], title: "hvac_tst_clg_delta_f", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv"},
 { id: 123, parents: [22], title: "hvac_tst_clg_sp_f", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv"},
 { id: 124, parents: [7], title: "hvac_tst_htg_delta_f", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv"},
 { id: 125, parents: [21], title: "hvac_tst_htg_sp_f", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv"},
 { id: 126, parents: [25], title: "hvac_night_variability", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv"},

 { id: 41, parents: [2], title: "purchase_input_responsibility", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv"},
 { id: 42, parents: [23], title: "region", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv"},
 { id: 43, parents: [13], title: "rentable_area", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv"},
 { id: 44, parents: [1], title: "rotation", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv"},

 { id: 45, parents: [16], title: "service_water_heating_fuel", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv"},
 { id: 46, parents: [6], title: "state_id", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv"},
 { id: 47, parents: [18], title: "weekday_duration", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv"},
 { id: 48, parents: [17], title: "weekday_start_time", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv"},
 { id: 49, parents: [20], title: "weekend_duration", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv"},
 { id: 50, parents: [19], title: "weekend_start_time", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv"},
 { id: 51, parents: [201], title: "window_wall_ratio", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv"},

 { id: 60, parents: [174], title: "year_bin_of_original_building_construction", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv"},

 { id: 52, parents: [175], title: "year_bin_of_last_exterior_lighting_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv"},
 { id: 53, parents: [176], title: "year_bin_of_last_hvac_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv"},
 { id: 54, parents: [177], title: "year_bin_of_last_interior_equipment_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv"},
 { id: 55, parents: [178], title: "year_bin_of_last_interior_lighting_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv"},
 { id: 56, parents: [179], title: "year_bin_of_last_roof_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv"},
 { id: 57, parents: [180], title: "year_bin_of_last_service_water_heating_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv"},
 { id: 58, parents: [181], title: "year_bin_of_last_walls_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv"},
 { id: 59, parents: [182], title: "year_bin_of_last_windows_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv"},

 { id: 61, parents: [12], title: "year_built", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv"}, 

 { id: 62, parents: [0], title: "year_of_simulation", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv"},
 



 //measures subs
 { id: 63, parents: [62], title: "add_blinds_to_selected_windows", itemTitleColor: "#d1f7cd", groupTitle: "measure"},
 { id: 64, parents: [126], title: "add_hvac_nighttime_operation_variability", itemTitleColor: "#d1f7cd", groupTitle: "measure"},
 { id: 65, parents: [122,123,124,125], title: "add_thermostat_setpoint_variability", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right},

 { id: 66, parents: [62,87], title: "ChangeBuildingLocation", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right},

 { id: 67, parents: [33,36,43,44,51,90,91,92,93,94,95,96,35,43,44,51,83,85,86,88,130,202], title: "create_bar_from_building_type_ratios", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right},
 { id: 68, parents: [33,45,47,48,49,50,90,91,92,93,94,95,96,35,36,45,47,48,49,50,86,121,130,], title: "create_typical_building_from_model", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right},

 { id: 69, parents: [39,40], title: "set_electric_equipment_bpr", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right},
 { id: 70, parents: [33,86,90,97,131], title: "set_exterior_lighting_template", itemTitleColor: "#d1f7cd", groupTitle: "measure"},
 { id: 71, parents: [127], title: "set_heating_fuel", itemTitleColor: "#d1f7cd", groupTitle: "measure"},
 { id: 72, parents: [86,90,132], title: "set_hvac_template", itemTitleColor: "#d1f7cd", groupTitle: "measure"},
 { id: 73, parents: [86,99], title: "set_interior_equipment_template", itemTitleColor: "#d1f7cd", groupTitle: "measure"},
 { id: 74, parents: [27,28], title: "set_interior_lighting_bpr", itemTitleColor: "#d1f7cd", groupTitle: "measure"},
 { id: 75, parents: [86,92], title: "set_interior_lighting_template", itemTitleColor: "#d1f7cd", groupTitle: "measure"},
 { id: 76, parents: [86,93,101], title: "set_roof_template", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right},
 { id: 77, parents: [45], title: "set_service_water_heating_fuel", itemTitleColor: "#d1f7cd", groupTitle: "measure"},
 { id: 78, parents: [86,94,102], title: "set_service_water_heating_template", itemTitleColor: "#d1f7cd", groupTitle: "measure"},
 { id: 79, parents: [62], title: "set_space_type_load_subcategories", itemTitleColor: "#d1f7cd", groupTitle: "measure"},
 { id: 80, parents: [86,95,103], title: "set_wall_template", itemTitleColor: "#d1f7cd", groupTitle: "measure"},
 { id: 81, parents: [86,96], title: "set_window_template", itemTitleColor: "#d1f7cd", groupTitle: "measure"},

 { id: 82, parents: [62], title: "simulation_settings", itemTitleColor: "#d1f7cd", groupTitle: "measure"},

 

];