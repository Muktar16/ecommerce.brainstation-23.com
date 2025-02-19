import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { BooleanEnum } from 'src/common/enums/boolean.enum';
import { Roles } from 'src/common/enums/user-roles.enum';

export class FilterUserDto {
  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  name?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  email?: string;

  @IsEnum(BooleanEnum)
  @IsOptional()
  @ApiPropertyOptional({
    required: false,
    enum: BooleanEnum,
    description: 'Filter by verification status',
  })
  isVerified?: BooleanEnum;

  @IsOptional()
  @IsEnum(Roles)
  @ApiProperty({ required: false, enum: Roles })
  role?: Roles;
}
