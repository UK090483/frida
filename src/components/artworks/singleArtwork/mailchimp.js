
import React, { useState } from 'react';

import Button from '../../buttons/noLinkButton'
import JotformEmbed from 'react-jotform-embed';

export default function Mailchimp({ artistName, artworkName }) {




    return (
        <div>
            <JotformEmbed src={'https://form.jotform.com/201973527081052'}></JotformEmbed>
        </div>
    )

}