
import opentrons
from opentrons import (
    protocol_api,
	execute
)

metadata = {
    "apiLevel": "2.15",
    "protocolName": "Serial Dilution Tutorial – OT-2 single-channel",
    "description": """This protocol is the outcome of following the
                   Python Protocol API Tutorial located at
                   https://docs.opentrons.com/v2/tutorial.html. It takes a
                   solution and progressively dilutes it by transferring it
                   stepwise across a plate.""",
    "author": "New API User"
    }
# requirements = {"robotType": "OT-2", "apiLevel": "2.15"}


# TODO: keep as OT2
# def run(protocol: protocol_api.ProtocolContext):
#     protocol = opentrons.execute.get_protocol_api("2.15")
#     protocol.home()
'''
systemctl stop opentrons-robot-server
systemctl start opentrons-robot-server
'''

def run(protocol: protocol_api.ProtocolContext):
	tips = protocol.load_labware("opentrons_96_filtertiprack_1000ul", 1) 
	reservoir = protocol.load_labware("usascientific_96_wellplate_2.4ml_deep", 2) # TODO: check microscope gui
	plate = protocol.load_labware("usascientific_96_wellplate_2.4ml_deep", 3)
	right_pipette = protocol.load_instrument("p1000_single_gen2", "right", tip_racks=[tips])
	for i in range(1):
		row = plate.rows()[i]
		right_pipette.transfer(100, reservoir["A2"], plate.wells())	
    # distribute diluent 
	# TODO: try for 1500ml to intiial water rack in position 1 (= put 3 times pipette volume manually for setup right now)
    # right_pipette.transfer(100, reservoir["A1"], plate.wells())
    # protocol = opentrons.execute.get_protocol_api("2.15")
    # protocol.home()

	# # loop through each row
	#     # can put 1300 ml of water into each position (below has 8 rows filled)
	# for i in range(1):

	# 	# save the destination row to a variable
	    # row = plate.rows()[i]
        # right_pipette.transfer(100, reservoir["A2"], row[0], mix_after=(3, 50))
        # right_pipette.transfer(100, reservoir["A2"], plate.wells())


	# 	# transfer solution to first well in column

	# 	# dilute the sample down the row
	# 	right_pipette.transfer(100, row[:11], row[1:], mix_after=(3, 50))

