import { IsNotEmpty } from 'class-validator';

export class CreateEftOperationDto {
    @IsNotEmpty()
    readonly sender: string;

    @IsNotEmpty()
    readonly receiver: number;

    @IsNotEmpty()
    readonly create_date: Date;

    @IsNotEmpty()
    readonly amount: number;
}
