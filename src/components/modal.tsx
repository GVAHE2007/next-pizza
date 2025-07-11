"use client"


import React from 'react';
import { cn } from '@/lib/utils';
import { Dialog } from './ui';
import { DialogContent, DialogTitle } from './ui/dialog';
import { Product } from '@prisma/client';
import { useRouter } from 'next/navigation';


interface Props {
    className?: string;
    product: Product;
}

export const Modal: React.FC<Props> = (props) => {
    const { className, product } = props;

    const router = useRouter()
    return (
        <Dialog open={!!product} onOpenChange={() => router.back()}>
            <DialogContent className='w-[1000px]'>
                <DialogTitle />
                <div className='flex gap-2'>
                    <div>
                        <img src={product.imgUrl} alt="" />
                    </div>
                    <div className='text-[25px]'>
                        {product.name}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}