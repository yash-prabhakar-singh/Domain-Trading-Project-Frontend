{/*<Grid
  container
  flex={3}
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="start"
  style={{ minHeight: '100vh',marginTop:40}}
  sx={{backgroundColor:'lightblue'}}
>
    <h1>Your Negotiations</h1>
    <TableContainer component={Paper} sx={{ maxWidth: 800 }}>
      <Table sx={{ maxWidth: 800 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Domain-Name</StyledTableCell>
            <StyledTableCell align="right">Buy/Sell</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Offered-At</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.domainName}>
              <StyledTableCell component="th" scope="row">
                {row.domainName}
              </StyledTableCell>
              <StyledTableCell align="right">{row.bns}</StyledTableCell>
              <StyledTableCell align="right">{row.status}</StyledTableCell>
              <StyledTableCell align="right">{row.offeredAt}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>*/}