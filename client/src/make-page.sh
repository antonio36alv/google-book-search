#!/bin/bash
printf "Page name:"
read comp
mkdir pages/$comp
touch pages/$comp/index.js
touch pages/$comp/style.css
printf 'import React from "react"
import "./style.css" \n \nexport default function ' >> pages/$comp/index.js
printf $comp >> pages/$comp/index.js
printf '() {\n \n return \n}' >> pages/$comp/index.js
printf "Open? y[es]?"
read answer
if [ "$answer" == "y" ]
then
code pages/$comp/index.js
fi
