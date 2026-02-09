class Solution:
    def largestAltitude(self, gain: List[int]) -> int:
        n = len(gain)
        max_alt = 0
        prefix = [0] * (n+1)
        for index,num in enumerate(gain):
            prefix[index+1] = prefix[index] + num
            max_alt = max(max_alt,prefix[index+1])
        return max_alt

# 0 ms runtime solution
class Solution:
    def largestAltitude(self, gain: List[int]) -> int:
        prefix =[0]
        for i in range(len(gain)):
            prefix.append(prefix[-1]+gain[i])
        return max(prefix)