import { connect } from 'react-redux';


const Can = (props) => {
   const { 
      hasRole, 
      hasPermission, 
      children,

      roles,
      permissions
   } = props;

   let can = true;

   if ((hasRole && !roles.includes(hasRole)) ||
       (hasPermission && !permissions.includes(hasPermission))
      ) { 
         can = false; 
      }

   if (typeof children === 'function') {
      return children(can);
   }

   return can? children: null;   
};


const mapStateToProps = state => ({
   roles: state.auth.roles,
   permissions: state.auth.permissions
});

export default connect(
   mapStateToProps, null
)(Can);
