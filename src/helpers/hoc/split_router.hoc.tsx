import React, {FC} from "react";

export const SplitRouterComponent:FC<any> = (props) => {
  if(props.match.params.id) {
      return <props.one id={props.match.params.id}/>
  }
  else {
      return <props.list/>
  }
}