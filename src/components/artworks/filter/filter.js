import React, { useState } from 'react';
import DropDown from '../../input/dropDown';
import style from './filter.module.scss';

const preisOptions = [
    { label: '100-500', value: '100-500' },
    { label: '500-1000', value: '500-1000' },
    { label: '1000-2000', value: '1000-2000' },
    { label: '2000-3000', value: '2000-3000' },
    { label: '3000-5000', value: '3000-5000' },
]

export default function Filter({ artworks, setFElements }) {

    const [curentlyOpen, setCurentlyOpen] = useState('');
    const [filter, setF] = useState({});
    const [filtered, setFiltert] = useState([]);



    const getOptions = () => {

        const artists = []
        const ArtistsOptions = []
        const stils = []
        const StilOptions = []
        const mediums = []
        const MediumOptions = []

        artworks.forEach(artwork => {
            const { artist_name, stil, medium } = artwork;

            if (!artists.includes(artist_name)) {
                artists.push(artist_name)
                ArtistsOptions.push({ label: artist_name, value: artist_name })
            }
            if (!stils.includes(stil)) {
                stils.push(stil)
                StilOptions.push({ label: stil, value: stil })
            }
            if (!mediums.includes(medium)) {
                mediums.push(medium)
                MediumOptions.push({ label: medium, value: medium })
            }


        });

        return {
            artist: ArtistsOptions,
            stil: StilOptions,
            medium: MediumOptions
        }
    }

    const options = getOptions();

    const handleSetOpen = (i) => {
        setCurentlyOpen(i)
    }
    const setFilter = (f, v) => {

        let nextFilter = { ...filter }
        nextFilter[f] = v
        setF(nextFilter)
        filterElements(nextFilter)

    }

    const filterElements = (f) => {

        let res = artworks.filter((e) => {
            let res = true;
            if (f.Artist) {
                res = e.artist_name === f.Artist
            }
            if (f.Stil && res) {
                res = e.stil === f.Stil
            }
            if (f.Medium && res) {
                res = e.medium === f.Medium
            }
            if (f.Preis && res) {
                let range = f.Preis.split('-')

                res = (e.price > parseInt(range[0])) && (e.price < parseInt(range[1]))
            }
            return res
        })
        setFElements(res)
    }


    return (
        <div className={style.root}>
            <DropDown label={'Artist'} options={options.artist} open={curentlyOpen === 'Artist'} setOpen={(i) => handleSetOpen(i)} setFilter={setFilter}></DropDown>
            <DropDown label={'Stil'} options={options.stil} open={curentlyOpen === 'Stil'} setOpen={(i) => handleSetOpen(i)} setFilter={setFilter}></DropDown>
            <DropDown label={'Medium'} options={options.medium} open={curentlyOpen === 'Medium'} setOpen={(i) => handleSetOpen(i)} setFilter={setFilter}></DropDown>
            <DropDown label={'Preis'} options={preisOptions} open={curentlyOpen === 'Preis'} setOpen={(i) => handleSetOpen(i)} setFilter={setFilter} ></DropDown>
        </div>

    )

}