import React, { useState, useRef } from "react"
import DropDown from "../../input/dropDown"
import style from "./filter.module.scss"
import getPriceWithTax from "../helper/getPriceWithTax"
import SrollUp from "./scrollUp"
import { useStaticQuery, graphql } from "gatsby"

const preisOptions = [
  { label: "100-500", value: "100-500", id: "100-500" },
  { label: "500-1000", value: "500-1000", id: "500-1000" },
  { label: "1000-2000", value: "1000-2000", id: "1000-2000" },
  { label: "2000-3000", value: "2000-3000", id: "2000-3000" },
  { label: "3000-5000", value: "3000-5000", id: "3000-5000" },
]

function Filter({ setFilterQuery, filterQuery }) {
  const data = useStaticQuery(graphql`
    query FilterQuery {
      stil: allStoryblokEntry(
        filter: { full_slug: { regex: "/stil//" } }
        sort: { fields: slug, order: ASC }
      ) {
        nodes {
          id
          label: field_name_string
          value: slug
        }
      }
      medium: allStoryblokEntry(
        filter: { full_slug: { regex: "/medium//" } }
        sort: { fields: slug, order: ASC }
      ) {
        nodes {
          id
          label: field_name_string
          value: slug
        }
      }
      artist: allStoryblokEntry(
        filter: { full_slug: { regex: "/artist//" } }
        sort: { fields: slug, order: ASC }
      ) {
        nodes {
          id
          label: field_name_string
          value: slug
        }
      }
    }
  `)
  const [curentlyOpen, setCurentlyOpen] = useState("")
  const [filter, setF] = useState({})
  const filterRef = useRef(null)

  const getOptions = () => {
    return {
      artist: data.artist.nodes,
      stil: data.stil.nodes,
      medium: data.medium.nodes,
    }
  }

  const options = getOptions()

  const handleSetOpen = i => {
    setCurentlyOpen(i)
  }
  const setFilter = (f, value) => {
    let nextFilter = filterQuery ? { ...filterQuery } : {}

    if (value) {
      nextFilter[f] = value
    } else {
      delete nextFilter[f]
    }

    setFilterQuery(nextFilter)
  }

  return (
    <React.Fragment>
      <div ref={filterRef} className={style.root}>
        <DropDown
          label={"Künstler"}
          filterName={"artist"}
          options={options.artist}
          open={curentlyOpen === "Künstler"}
          setOpen={i => handleSetOpen(i)}
          setFilter={setFilter}
          fixedHeight={true}
        ></DropDown>
        <DropDown
          label={"Stil"}
          filterName={"stil"}
          options={options.stil}
          open={curentlyOpen === "Stil"}
          setOpen={i => handleSetOpen(i)}
          setFilter={setFilter}
        ></DropDown>
        <DropDown
          label={"Medium"}
          filterName={"medium"}
          options={options.medium}
          open={curentlyOpen === "Medium"}
          setOpen={i => handleSetOpen(i)}
          setFilter={setFilter}
        ></DropDown>
        <DropDown
          label={"Preis"}
          filterName={"Preis"}
          options={preisOptions}
          open={curentlyOpen === "Preis"}
          setOpen={i => handleSetOpen(i)}
          setFilter={setFilter}
        ></DropDown>
      </div>
      <SrollUp targetRef={filterRef}></SrollUp>
    </React.Fragment>
  )
}

export default React.memo(Filter)
