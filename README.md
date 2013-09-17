### Features

* Reads from 2 different CAN buses (Diagnostic Fast and Diagnostic Med) at up
  to 1Mbps per bus.
* Decodes CAN data into a human and machine-readable format (currently JSON)
* Can relay vehicle data at up to 250kbps over a Bluetooth connection
* Can relay vehicle data at up to 11Mbps over a USB connection
* Passes up to 6A of power from the vehicle to the Dock and Accessories

Documents
---------

### Design Files

* [Schematics (eagle)](./vehicle-interface.sch)
* [Schematics (pdf)](./vehicle-interface.sch.pdf)
* [Board Layout (eagle)](./vehicle-interface.brd)
* [Board Layout (png image)](./vehicle-interface.brd.png)
* [Bill of Materials](./vehicle-interface.bom.xls)
* [Testing Results + Changelog](./CAN Translator Changelog + Testing.xls)
* schematics/DESIGN_CRITERIA.xls
* CHANGELOG.xls

### Assembly Files

* [Board Layout DXF](./Fabrication/vehicle-interface.dxf)
* [Fabrication files](./schematics/fabrication)
    * .top  - Top Copper Layer
    * .bot  - Bottom Copper Layer
    * .smt - Top Soldermask
    * .slk - Top Silkscreen
    * .tsp - Top Solderpaste
    * .smb - Bottom Soldermask
    * .bsk - Bottom Silkscreen
    * .bsp - Bottom Solderpaste
    * .oln - PCB Outline
    * .drd - Excellon Drill Data
    * .drl - Basic Drill tool information
    * .dri - Extended Drill tool information
