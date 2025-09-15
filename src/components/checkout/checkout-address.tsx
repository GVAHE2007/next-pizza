"use client"
import React from 'react';
import { cn } from '@/lib/utils';
import { Card } from '../ui';
import { CardContent, CardHeader, CardTitle } from '../ui/card';
import { FormInput } from '../form/form-input';
import { FormTextarea } from '../form/form-textarea';

interface Props {
    className?: string;
}

export const CheckoutAddress: React.FC<Props> = (props) => {
    const { className } = props;

    return (

        <Card className={cn("w-full", className)}>
            <CardHeader>
                <CardTitle className="flex justify-between">
                    <span>3. Адрес доставки</span>
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <FormInput name="address" label="Address" />
                <FormTextarea name="comment" label="Message" />
            </CardContent>

        </Card>



    );
}