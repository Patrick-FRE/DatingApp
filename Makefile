# CXX = g++
# CXXFLAGS = -Wall -Werror -Wextra -pedantic -std=c++17 -g -fsanitize=address
# LDFLAGS =  -fsanitize=address

# SRC = 
# OBJ = $(SRC:.cc=.o)
# EXEC = main

# all: $(EXEC)

# $(EXEC): $(OBJ)
# 	$(CXX) $(LDFLAGS) -o $@ $(OBJ) $(LBLIBS)

# clean:
# 	rm -rf $(OBJ) $(EXEC)


# Dir
WebApiDir = DatingApp.API
UIDir = DatingAppSPA


.PHONY = ui-start

# start ui development server
ui-start:
	npm run start --prefix ./${UIDir}

# install ui dependency
ui-install:
	npm install --prefix ./${UIDir}
	