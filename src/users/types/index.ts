import { ApiProperty } from "@nestjs/swagger";

export class LoginUserRequest {
    @ApiProperty({ example: 'Vova' })
    username: string;

    @ApiProperty({ example: '123' })
    password: string;
}

export class LoginUserResponse {
    @ApiProperty({
        example: {
            user: {
                userId: 1,
                username: 'Vova',
                password: 123,
            },
        },
    })
    username: {
        userId: number;
        username: string;
        password: string;
    }

    @ApiProperty({ example: 'Logged In' })
    password: string;
}

export class LogoutUserResponse{
    @ApiProperty({example: 'Session has ended'})
    msg: string;
}

export class LoginCheckResponse{
    @ApiProperty({example: '1'})
    userId: number;

    @ApiProperty({example: 'Vova'})
    username: string;

    @ApiProperty({example: 'vova123@gmail.com'})
    email: string;
}

export class SignupResponse{
    @ApiProperty({example: '1'})
    userId: number;

    @ApiProperty({example: 'Vova'})
    username: string;

    @ApiProperty({example: 'vova123@gmail.com'})
    email: string;

    @ApiProperty({example: '2024-02-08T15:44:03.546Z'})
    updatedAt: string;

    @ApiProperty({example: '2024-02-08T15:44:03.546Z'})
    createdAt: string;
}