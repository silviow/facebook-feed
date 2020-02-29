import React from 'react';
import { Head } from './styles';

export default function Header() {
  return (
    <Head>
        <nav>
            <a href="/">
                <img src="https://i.imgur.com/KDIDiSE.png" alt="Facebook" />
            </a>
            <ul>
                <li>
                    <a href="/">
                        <span>My profile</span>
                        <i className="material-icons">account_circle</i>
                    </a>
                </li>
            </ul>
        </nav>
    </Head>
  );
}
