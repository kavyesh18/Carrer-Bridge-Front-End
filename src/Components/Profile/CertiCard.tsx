import { ActionIcon } from "@mantine/core";
import { IconPencil, IconTrash } from "@tabler/icons-react";
import { formatDate } from "../../Services/Utilities";

const CertiCard = (props:any) => {
    return <div className="flex justify-between">
      <div className="flex gap-2 items-center">
        <div className="p-2 bg-mine-shaft-800 rounded-md">
          <img
            className="h-8 w-auto exp-card-icon"
            src={`/Icons/${props.issuer}.png`}
            alt="Google Logo"
          />
        </div>
        <div className="flex flex-col">
          <div className="font-semibold">{props.name}</div>
          <div className="text-sm text-mine-shaft-300">
            {props.issuer}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
      <div className="flex flex-col items-end">
        <div className="text-sm text-mine-shaft-300">
           Date: {formatDate(props.issueDate)}
        </div>
        <div className="text-sm text-mine-shaft-300">
           ID: {props.certificateId}
        </div>

       {props.edit&&<ActionIcon
              size="lg"
              color="red.8"
              variant="subtle"
            >
              
                <IconTrash className="h-4/5 w-4/5" stroke={1.5} />
            
            </ActionIcon>}
      </div>
     
      </div>
    </div>

    

};

export default CertiCard;