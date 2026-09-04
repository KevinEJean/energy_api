import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ResponseHealthDto } from './response-health.dto';
import { ApiBadRequestResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Health')
@Controller({ path: 'health', version: '1' })
export class HealthController {

    @ApiOperation({
        summary: "Vérifier le bon fonctionement du service",
        description: "Retourne l'état courant du service",
    })
    @ApiResponse({
        description: "Le service est en marche.",
        type: ResponseHealthDto,
    })
    @Get()
    @HttpCode(HttpStatus.OK)
    check() {
        return {
            status: "ok",
            service: 'energy-api',
            timestamp: new Date().toISOString()
        }
    }
}
