import { useGetProductField } from "@/api/getProductField";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FilterTypes } from "@/types/filters";
import React from 'react';

type FilterOriginProps = {
    setFilterOrigin: (origin: string) => void
}

const FilterOrigin = (props: FilterOriginProps) => {
    const { setFilterOrigin } = props;
    const { result, loading }: FilterTypes = useGetProductField()
    console.log("Resultado de Filtro:", result);
    //const originOptions = result?.schema?.origin?.enum;
    const originOptions = result?.schema?.attributes?.origin?.enum;

    return (
        <div className="my-5">
            <p className="mb-3 font-bold">Origen</p>
            {loading && result === null && (
                <p>Cargando origen...</p>
            )}

            <RadioGroup onValueChange={(value) => setFilterOrigin(value)}>
                {originOptions && originOptions.map((origin: string) => (
                    <div key={origin} className="flex items-center space-x-2">
                        <RadioGroupItem value={origin} id={origin} />
                        <Label htmlFor={origin}>{origin}</Label>
                    </div>
                ))}
            </RadioGroup>
        </div>
    );
}

export default React.memo(FilterOrigin);;