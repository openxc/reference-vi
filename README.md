OpenXC Vehicle Interface
========================

![Vehicle Interface](./CANTranslator_scaled.JPG "The Vehicle Interface")

### Description

The Vehicle Interface (VI) is an open source microcontroller board that reads data
from an automotive OBD-II diagnostic port. Vehicle data is decoded by the
translator into a more human and machine readable format, JSON. The decoded data
can be read from either of the USB or Bluetooth interfaces.

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

* [Schematics (eagle)](./CANtranslator.sch)
* [Schematics (pdf)](./CANtranslator.sch.pdf)
* [Board Layout (eagle)](./CANtranslator.brd)
* [Board Layout (png image)](./CANtranslator.brd.png)
* [Bill of Materials](./CANtranslator.bom.xls)
* schematics/DESIGN_CRITERIA.xls
* CHANGELOG.xls

### Assembly Files

* [Board Layout DXF](./Fabrication/CANtranslator.dxf)
* [Assembly file archive](./CANtranslator_R1.0_Assembly.zip)
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
