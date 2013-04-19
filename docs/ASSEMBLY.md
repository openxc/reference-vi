Vehicle Interface Assembly Instructions
=======================================

Special Assembly Instructions
-----------------------------

*	See NOTES: on ASSY drawings for general notes
*	Ensure no excess solder is wicked into J0 (USB Micro Connector).  Verify a
	USB Micro cable can successfully connect
*	Ensure J0 (USB Micro Connector) is completely flush to the PCB before/after
	reflow.  Ensure pins at rear of connector are not lifted off pads.
*	Apply epoxy to J0 for additional structural rigidity
*	Ensure J2 (OBD-II connector) pins are flush with PCB before soldering
*	Ensure J2 (OBD-II connector) is horizontal to PCB before soldering
*	LED1 and LED4 (through hole RGB LEDs) must be bent 90 degrees towards front
	edge of PCB
*	Ensure both through hole electrolytic capacitors (C2 and C3) are flush
	against PCB before soldering.
*	Ensure part Q2 (12MHz crystal) is oriented such that the long dimension
	follows the centerline on the silkscreen layer.

Assembly file output instructions
---------------------------------

*	Verify silkscreen and PCB Frame artwork reflects accurate revision
*	Update layers 125 and 126 - text on top of each component should identify
	the part designator
*	Delete all content on layer (144) DrillLegend
*	run "drillegend.ulp": Use all default values, click OK.
*	Reselect layer (144) and move the newly created drill legend back onto the
	frame
*	Verify SSC-EAGLE-2Lyr_v1.0.0.3.dru is loaded as current design rules file
*	Turn on all copper and stopmask layers, turn off silkscreen layers (skip
	silkscreen error checking, silkscreen will be clipped by assembly house)
*	Preform DRC/ERC check
*	run "drillcfg.ulp": select "Inch" as output format.  Click OK.  Save.
*	run "excellon.cam" in the CAM processor, click "Process Job"
*	run "2LPlus-Sunstone.cam" in the CAM processor, click "Process Job"
*	Double check all gerber files using a gerber file viewer (like gerbv).
*	Deselect all layers, select only the following layers:
	(17)Pads, (18)Vias, (20)Dimension, (21)tPlace, (22)bPlace, (23)tOrigins,
	(24)bOrigins, (49)Reference, (51)tDocu, (52)bDocu, (125)tAssy, (126)bAssy
*	run "dxf.ulp": deselect "Fill Areas", make sure "mm" is selected under the
	"units" header.  Save the DXF file.
*	Deselect all layers, select only the following layers:
	(17)Pads, (18)Vias, (20)Dimension, (21)tPlace, (23)tOrigins, (48)Document,
	(49)Reference, (51)tDocu, (125)tAssy, (144)DrillLegend
*	Hit print (Ctrl+P), select "Print to File (PDF)" as the printer, select
	CANtranslator_ASSY_TOP.pdf, paper size A4, scale factor 1.  Click OK.
*	Deselect all layers, select only the following layers:
	(17)Pads, (18)Vias, (20)Dimension, (22)bPlace, (24)bOrigins, (48)Document,
	(49)Reference, (52)bDocu, (126)bAssy, (144)DrillLegend
*	Hit print (Ctrl+P), select "Print to File (PDF)" as the printer, select
	CANtranslator_ASSY_BOT.pdf, paper size A4, scale factor 1.  Click OK.
*	Deselect all layers, select only the following layers:
	(1)Top, (16)Bottom, (17)Pads, (18)Vias, (20)Dimension, (21)tPlace,
	(22)bPlace, (25)tNames, (51)tDocu, (52)bDocu
*	Zoom in so that PCB is centered in the screen and fills the window as much
	as possible.
*	Select File->Export->Image.  Select CANtranslator.brd.png.  Set "Resolution"
	to 600.  Set "Area" to "Window".
*	In the schematic window, hit print (Ctrl+P), select "Print to File (PDF)" as
	the printer, select CANtranslator.sch.pdf, paper size A4, scale factor 1,
	page limit 1  Click OK.
*	In the schematic window, select File->Export->Partlist.  Select
	"CANtranslator.parts.txt".  Click OK.
*	Manually compare "CANtranslator.parts.txt" to "CANtranslator.bom.xls".  Make
	sure the two lists are consistent.
*	Open "CAN Translator Changelog + Testing.xls".  Update the file to reflect
	the new revision.
*	Create a zip archive with the following files (at least):
	*	CANtranslator.pdf
	*	CANtranslator.brd.png
	*	CANtranslator_ASSY_TOP.pdf
	*	CANtranslator_ASSY_BOT.pdf
	*	CANtranslator.tsp
	*	CANtranslator.top
	*	CANtranslator.smt
	*	CANtranslator.smb
	*	CANtranslator.slk
	*	CANtranslator.oln
	*	CANtranslator.gpi
	*	CANtranslator.dxf
	*	CANtranslator.drl
	*	CANtranslator.dri
	*	CANtranslator.drd
	*	CANtranslator.bsp
	*	CANtranslator.bsk
	*	CANtranslator.bot
	*	CANtranslator.bom.xls
	*	CANtranslator.sch
	*	CANtranslator.brd
	*	CAN Translator Changelog + Testing.xls

Gerber file descriptions:
-------------------------

*	.top 	Top Copper Layer
*	.smt 	Top Soldermask
*	.slk 	Top Silkscreen
*	.tsp 	Top Solderpaste
*	.bot 	Bottom Copper Layer
*	.smb 	Bottom Soldermask
*	.bsk 	Bottom Silkscreen
*	.bsp 	Bottom Solderpaste
*	.oln	PCB Outline
*	.drd 	Excellon Drill Data
*	.drl 	Basic Drill tool information
*	.dri 	Extended Drill tool information

Factory Testing Plan
--------------------

A test jig can be created using [Spring Pogo
Pins](https://www.adafruit.com/products/394).  At a minimum, the test jig should
contain pogo pins and mounting holes at the PCB locations outlined by [this
spreadsheet](./CANtranslator_pogo_locations.xls).  A rooted linux host is
necessary for this test - perhaps an embedded android device like a raspberyPi,
Beagleboard or pcDuino.

1.	Connect OBD cable, JTAG and Micro USB cables to the board under test
1.	Apply 12V power to board
1.	Measure all power rails, verify they are within 0.1V of target
1.	Remove +12V power, attach +5V supply to the Micro USB port
1.	Re-verify power rails are within range
1.	Re-apply 12V power to board
1.	Deploy test firmware to board, examine OpenOCD output for errors
1.	Take snapshot of logic levels and compare to expected values: BT_RTS,
	BT_CTS, BT_RESET, BT_CONN, DOCK_PWR_EN, DOCK_PWR_OUT, USB_CON, ISP_EN,
	USBBOOT_EN, DEBUG_TX, DEBUG_RX, RESET, DOCK_PWR_FLT, DOCK_PWR_PG
1.	Boot into ISP bootloader (Pull ISP_EN low, Toggle RESET, Release ISP_EN) and
	retrieve LPC1769 serial number
1.	(ensure that test firmware configures the baud rate of the RN-41 device, see
	the [RN-41 Configuration in the hardware
	README](./README.html#rn-41-configuration))
1.	Execute short bluetooth bandwidth test (data-test.py --bandwidth --size 5000
	--plot).  Capture results.  Take snapshot of BT_RTS, BT_CTS, BT_RESET,
	BT_CONN lines upon error
1.	Execute short USB bandwidth test (data-test.py --usb --bandwidth --size
	50000 --plot).  Capture results.  Take snapshot of USB_CON, +5V upon error
1.  Execute short CAN bandwdith test (cantx.py --plot).  Capture results.  Take
	snapshot CANA_HI, CANA_LO, CANB_HI, CANB_LO upon error.
1.	Assert Dock power output.  Measure voltage at connector output, verify it is
	within 0.5V of target.
1.	De-assert Dock power output, re-measure, verify connector output is 1V or
	below.
1.	Deploy production firmware to board
1.	Connecto to USB, verify production firmware is successfully running
