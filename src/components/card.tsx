import React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Title } from './title';
import { Button } from './ui';
import { Plus } from 'lucide-react';
import { Ingredient } from '@prisma/client';

interface Props {
    className?: string;
    title: string;
    imgUrl: string;
    text: Ingredient[];
    price: number;
}

export const Card: React.FC<Props> = (props) => {
    const { className, title, imgUrl, price, text } = props;
    return (
        <article className={cn("", className)}>


            <div>
                <img src={imgUrl} alt="" width={210} height={210} />
                {/* <Image src={imgUrl} alt={''} width={210} height={210} /> */}
            </div>
            <div className='flex flex-col gap-4'>
                <Title size={'m'}>
                    {title}
                </Title>
                <p> {text.map((el) => el.name).join(",")}</p>
                <div className='flex gap-5'>
                    <span>от {price} ₽</span>
                    <Button>
                        <Plus /> Добавить
                    </Button>
                </div>
            </div>
        </article>
    );
}