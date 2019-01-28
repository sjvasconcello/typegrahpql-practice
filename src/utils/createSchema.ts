import { buildSchema } from "type-graphql";
import { AuthorBookResolver } from '../modules/author-book/AuthorBookResolver';
import { ChangePasswordInput } from "../modules/user/changePassword/ChangePasswordInput";
import { ConfirmUserResolver } from "../modules/user/ConfirmUser";
import { CreateUserResolver } from "../modules/user/CreateUser";
import { ForgotPasswordResolver } from "../modules/user/ForgotPassword";
import { LoginResolver } from "../modules/user/Login";
import { LogoutResolver } from "../modules/user/Logout";
import { MeResolver } from "../modules/user/Me";
import { ProfilePictureResolver } from "../modules/user/ProfilePicture";
import { RegisterResolver } from "../modules/user/Register";

export const createSchema = () =>
  buildSchema({
    resolvers: [
      ChangePasswordInput,
      ConfirmUserResolver,
      ForgotPasswordResolver,
      LoginResolver,
      LogoutResolver,
      MeResolver,
      RegisterResolver,
      CreateUserResolver,
      ProfilePictureResolver,
      AuthorBookResolver
    ],
    authChecker: ({ context: { req } }) => {
      return !!req.session.userId;
    }
  });
