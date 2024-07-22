import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./Profile";

@Entity({name: 'users'})
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    username: string;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @Column({nullable: true})
    bio: string;

    @Column()
    created_at: Date;

    @Column({ nullable: true})
    updated_at: Date;

    @OneToOne(() => Profile)
    @JoinColumn()
    profile: Profile;
}