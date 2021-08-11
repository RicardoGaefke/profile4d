import {
  Table, TableBody, TableCell, TableHead, TableRow,
} from '@material-ui/core';
import React from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { IUser } from '../../../../../TypeScript/Interfaces/IUser';

export interface UserInfoBoxProps extends WithTranslation {
  userInfo: IUser;
}

const UserInfoBox = withTranslation()(
  (props: UserInfoBoxProps): JSX.Element => {
    const { userInfo } = props;

    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nome:</TableCell>
            <TableCell>Email:</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>{userInfo.Name}</TableCell>
            <TableCell>{userInfo.Email}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  },
);

UserInfoBox.displayName = 'UserInfoBox';

export default UserInfoBox;
