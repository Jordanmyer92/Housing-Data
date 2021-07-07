select public."64109_Research".address, public."64109_Research".statusofcase, public."Out_Of_State".address, public."Out_Of_State".owner_name, public."Out_Of_State".owner_state
from public."64109_Research"
Inner Join public."Out_Of_State" on public."64109_Research".address = public."Out_Of_State".address