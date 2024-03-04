# ENSURE you have vim' a deck_calibration and robot_settigns json files  inspired by opentrons_covid19 custom defaults
'''
~ AUTOMATE FOR ~

Processs 1:
Picking different fluids 
--> pick 1 tip at a time, transfer to microcope 

Process 2:
Send to microscope for analyzing with the OpenCV algorithm
'''
# TODO: keep as OT2

import opentrons
from opentrons import protocol_api
from opentrons import labware, instruments, robot

'''
PARAM TEACHING:
    Connecting to the robot: 
        robot.connect()

    Defining labware: 
        You need to load labware onto the robot using labware.load()
        
    Defining instruments (pipettes): 
        You need to define which pipette you are using and its parameters using instruments.P300_Single() 
        (or another appropriate class depending on your pipette)

    Defining your protocol steps: 
        Write the steps of your protocol as functions. In this template, run_protocol() is defined as an example

    Running the protocol: 
        Call the function where you've defined your protocol steps

    Disconnecting from the robot: A
        lways disconnect from the robot when your script finishes running using robot.disconnect()

    Make sure to replace the labware and pipette types with those appropriate for your experiment. 
    Also, ensure that your protocol steps are correct for your specific experiment.

'''


metadata = {
    "apiLevel": "2.16",
    "protocolName": "Serial Dilution Tutorial – OT-2 single-channel",
    "description": """This protocol is the outcome of following the
                   Python Protocol API Tutorial located at
                   https://docs.opentrons.com/v2/tutorial.html. It takes a
                   solution and progressively dilutes it by transferring it
                   stepwise across a plate.""",
    "author": "New API User"
    }

# Connect to the robot
robot.connect()

# Define labware
tip_rack = labware.load('opentrons-tiprack-300ul', '1')
plate = labware.load('96-flat', '2')
# Define pipettes
pipette = instruments.P300_Single(
    mount='left',
    tip_racks=[tip_rack]
)

# Define functions for your protocol
def run_protocol():
    # Your protocol steps go here
    pipette.pick_up_tip()
    pipette.aspirate(100, plate['A1'])
    pipette.dispense(100, plate['B2'])
    pipette.drop_tip()

# Run the protocol
run_protocol()

# Disconnect from the robot
robot.disconnect()


# class opentrons:
#     def __init__(self, protocol):
#         pass

#     def pick_fluids(self, name):
#         pass

#     def send_to_microscope(self):
#         pass



# def main(): # run
#     new = opentrons()
#     # opentrons.pick_fluids("water")
#     # opentrons.send_to_microscope()

# if __name__ == '__main__':
#     main()
