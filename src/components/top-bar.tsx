import React from 'react';
import { cn } from '@/lib/utils';
import { Categories } from './categories';
import { SortPopup } from './sort-popup';
import { Container } from './container';


interface Props {
    className?: string;
}
const items = [
    {
        name: "Все",

    },
    {
        name: "Мясные",

    },
    {
        name: "Острые",

    },
    {
        name: "Сладкие",

    },
    {
        name: "Вегетарианские",

    },
    {
        name: "С курицей",

    }
].map((el, i) => ({ ...el, id: i + 1 }))




export const TopBar: React.FC<Props> = (props) => {
    const { className } = props;
    return (
        <Container className={cn("flex justify-between", className)}>

            <Categories items={items} />
            <SortPopup />
        </Container>
    );
}